import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { AnswersService } from "src/app/core/answers.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Login } from "../../models/login";
import Swal from "sweetalert2";
import { DOCUMENT } from "@angular/common";
import { DataService } from "src/app/core/data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataAnswers: [any];
  dataOnlyAnswers: [any];
  data = [];
  opciones = [];
  userLogged: Login;
  dni = "";
  other: Boolean = true;
  cantExcep: Number = 0;
  public documentForm: FormGroup;
  parTotal = 0;
  total = 0;
  quest;
  isLoading = false;

  region: [any];
  departament: [any];
  arraydepa = [];
  surveyhability: Boolean = false;
  messageAlert: Boolean = true;
  iddepartament: Number;
  constructor(
    private answersService: AnswersService,
    private dataService: DataService,
    @Inject(DOCUMENT) document: Document
  ) {
    this.userLogged = JSON.parse(localStorage.getItem("userLogged")) as Login;
    this.dni = this.userLogged.dni.toString();
  }

  ngOnInit() {
    this.getAnswers();
    this.getDepartaments();
    // this.documentForm = new FormGroup({
    //   a_opcion: new FormControl("")
    // });
  }

  public deparChange(value) {
    this.surveyhability = true;
    this.messageAlert = false;
    this.iddepartament = value;
    console.log("opcion departamento", this.iddepartament);
  }

  public getDepartaments() {
    this.answersService.getDepartaments().subscribe(
      respose => {
        this.region = respose.region;
        this.departament = respose.departaments;
        this.region.forEach(element => {
          let depart = this.departament.filter(obj => obj.r_id == element.r_id);
          this.arraydepa.push({
            region: element.r_description,
            departaments: depart
          });
        });
      },
      error => {
        console.log("error en el servicio:", error);
      }
    );
  }

  public getAnswers() {
    this.answersService.getAnswers().subscribe(
      respose => {
        let datita = respose.answers;
        datita.map(function(dato) {
          if (dato.o_active == "false") {
            dato.o_active = false;
            return dato;
          } else {
            dato.o_active = true;
            return dato;
          }
        });

        this.dataAnswers = datita;
        this.dataOnlyAnswers = respose.onlyAnswers;
        this.dataOnlyAnswers.forEach(element => {
          let options = this.dataAnswers.filter(
            obj => obj.q_id == element.q_id
          );
          this.data.push({
            answers: element.q_description,
            idanswers: element.q_id,
            nro: element.q_nro,
            checked: false,
            disabled: element.disabled == "true" ? true : false,
            options: options
          });
        });
        this.quest = this.dataOnlyAnswers.filter(
          obj => obj.disabled == "false"
        );
        this.total = this.quest.length;
        this.dataService.total = this.total;
        this.dataService.parttotal = this.parTotal;

        // console.log("data", this.data);
      },
      error => {
        console.log("error en el servicio:", error);
      }
    );
  }

  public save() {
    console.log("data", this.opciones);
    var con12 = 0;
    var con15 = 0;
    var con33 = 0;
    var con63 = 0;
    var con6370 = 0;

    let cantind12 = this.opciones.findIndex(
      ob => ob.question === 11 && ob.option === 37
    );
    let cantind15 = this.opciones.findIndex(
      ob => ob.question === 14 && ob.option === 52
    );

    let cantind33 = this.opciones.findIndex(
      ob => ob.question === 32 && ob.option === 135
    );

    let cantind63 = this.opciones.findIndex(
      ob => ob.question === 62 && ob.option === 255
    );
    let cantind6370 = this.opciones.findIndex(
      ob => ob.question === 62 && ob.option === 256
    );

    if (cantind12 !== -1) {
      con12 = +2;
    }
    if (cantind15 !== -1) {
      con15 = +1;
    }
    if (cantind33 !== -1) {
      con33 = +1;
    }
    if (cantind63 !== -1) {
      con63 = +1;
    }
    if (cantind6370 !== -1) {
      con6370 = +1;
    }
    var cantdes = con12 + con15 + con33 + con63 + con6370;
    let tamSurvey = this.dataOnlyAnswers.length - cantdes;
    let tamSurveyNew = this.opciones.length;

    if (tamSurvey == tamSurveyNew) {
      Swal.fire({
        title: "¿Está seguro de enviar la encuesta?",
        text: "La encuesta se registrará en nuestra base de datos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar"
      }).then(result => {
        if (result.value) {
          this.isLoading = true;
          let data = {
            departament: this.iddepartament,
            dataopciones: this.opciones
          };
          this.answersService.saveSurvey(data).subscribe(
            response => {
              if (response.success) {
                // Swal.fire("Información", response.message, "success",).then(
                Swal.fire({
                  title: "Información",
                  text: response.message,
                  icon: "success",
                  onAfterClose: this.restartSurvey.bind(this)
                });
                this.isLoading = false;
                // window.location.reload();
              } else {
                Swal.fire("Error", response.message, "error");
                this.isLoading = false;
              }
            },
            error => {
              Swal.fire(
                "Error",
                "Al guardar la encuesta motivo: " + error,
                "error"
              );
              console.log("error al guardar encuesta:", error);
              this.isLoading = false;
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Información", "Usted ha cancelado el envio", "error");
          this.isLoading = false;
        }
      });
    } else {
      Swal.fire("Error", "Falta completar la encuesta", "error");
    }
  }

  private restartSurvey() {
    this.opciones = [];
    this.resetInputs();
    this.parTotal = 0;
    this.total = this.quest.length;
    this.dataService.total = this.total;
    this.dataService.parttotal = this.parTotal;
    window.scrollTo(0, 0);
  }
  private resetInputs() {
    const inputsCollection = document.getElementsByClassName(
      "custom-control-input"
    );
    for (let index = 0; index < inputsCollection.length; index++) {
      const input = <HTMLInputElement>inputsCollection.item(index);
      input.checked = false;
    }
  }
  public blurComent(event, question, option) {
    // console.log("data", event.target.value, question, option);
    // console.log("comentario", event);
    this.opciones.map(function(dato) {
      if (dato.question == question && dato.option == option) {
        dato.description = event;
      }
      return dato;
    });
  }

  radioChange(event, question, i?, j?) {
    console.log("opcion", event.target.value);
    console.log("pregunta", question);
    console.log("i", i);
    console.log("j", j);
    let tam = this.opciones.length;
    const option = event.target.value;
    var cont12 = 0;
    var cont15 = 0;
    var cont33 = 0;
    var cont63 = 0;
    var cont6370 = 0;
    if (tam == 0) {
      this.opciones.push({
        question: parseInt(question),
        option: parseInt(option),
        description: "",
        user: this.dni
      });
      this.parTotal = this.parTotal + 1;
      this.dataService.parttotal = this.parTotal;
    } else {
      const resultado = this.opciones.filter(obj => obj.question == question)
        .length;
      if (resultado > 0) {
        this.opciones.map(function(dato) {
          if (dato.question == question) {
            dato.option = parseInt(option);
            dato.description = "";
          }
          return dato;
        });
        cont12 = cont12 + 1;
        cont15 = cont15 + 1;
        cont33 = cont33 + 1;
        cont63 = cont63 + 1;
        cont6370 = cont6370 + 1;
      } else {
        this.opciones.push({
          question: parseInt(question),
          option: parseInt(option),
          description: "",
          user: this.dni
        });
        this.parTotal = this.parTotal + 1;
        this.dataService.parttotal = this.parTotal;
      }
    }

    //habilitar y desabilutar preguntas
    if (question == 11 && option == 36) {
      this.data[i + 1].disabled = false;
      this.data[i + 2].disabled = false;

      //aunmentar cantidad

      this.total = this.total + 2;
      this.dataService.total = this.total;
    } else if (question == 11 && option == 37) {
      this.data[i + 1].disabled = true;
      this.data[i + 2].disabled = true;
      //elimino elemento1
      let indice1 = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice1 !== -1) {
        this.opciones.splice(indice1, 1);
        this.parTotal = this.parTotal - 1;
      }

      //elimino elemento2
      let indice2 = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 2
      );
      if (indice2 !== -1) {
        this.opciones.splice(indice2, 1);
        this.parTotal = this.parTotal - 1;
      }
      this.dataService.parttotal = this.parTotal;

      //disminuir total
      if (cont12 > 0) {
        this.total = this.total - 2;
        this.dataService.total = this.total;
      }
    } else if (question == 14 && option == 51) {
      this.data[i + 1].disabled = false;

      //aumentar cantidad
      this.total = this.total + 1;
      this.dataService.total = this.total;
    } else if (question == 14 && option == 52) {
      this.data[i + 1].disabled = true;

      //elimino elemento
      let indice = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice !== -1) {
        this.opciones.splice(indice, 1);
        this.parTotal = this.parTotal - 1;
        this.dataService.parttotal = this.parTotal;
      }

      //disminuir cantidad
      if (cont15 > 0) {
        this.total = this.total - 1;
        this.dataService.total = this.total;
      }
    } else if (question == 32 && option == 134) {
      this.data[i + 1].disabled = false;

      //aumentar cantidad
      this.total = this.total + 1;
      this.dataService.total = this.total;
    } else if (question == 32 && option == 135) {
      this.data[i + 1].disabled = true;

      //elimino elemento
      let indice = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice !== -1) {
        this.opciones.splice(indice, 1);
        this.parTotal = this.parTotal - 1;
        this.dataService.parttotal = this.parTotal;
      }

      //disminuir cantidad
      if (cont33 > 0) {
        this.total = this.total - 1;
        this.dataService.total = this.total;
      }
    } else if (question == 62 && option == 254) {
      this.data[i + 1].disabled = false;

      //aumentar cantidad
      this.total = this.total + 1;
      this.dataService.total = this.total;
    } else if (question == 62 && option == 255) {
      this.data[i + 1].disabled = true;

      //elimino elemento
      let indice = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice !== -1) {
        this.opciones.splice(indice, 1);
        this.parTotal = this.parTotal - 1;
        this.dataService.parttotal = this.parTotal;
      }

      //disminuir cantidad
      if (cont63 > 0) {
        this.total = this.total - 1;
        this.dataService.total = this.total;
      }
    } else if (question == 62 && option == 256) {
      this.data[i + 1].disabled = true;

      //elimino elemento
      let indice = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice !== -1) {
        this.opciones.splice(indice, 1);
        this.parTotal = this.parTotal - 1;
        this.dataService.parttotal = this.parTotal;
      }

      //disminuir cantidad
      if (cont6370 > 0) {
        this.total = this.total - 1;
        this.dataService.total = this.total;
      }
    }
    // console.log("mostra habilitacion:", this.data[i + 1].checked);

    //habilitar y limpiar comentarios otros
    if (question == 12 && option == 45) {
      this.data[11].options[7].o_active = false;
    } else if (question == 12 && option != 45) {
      this.data[11].options[7].o_active = true;
      this.data[11].options[7].coment = "";
    } else if (question == 15 && option == 60) {
      this.data[14].options[7].o_active = false;
    } else if (question == 15 && option != 60) {
      this.data[14].options[7].o_active = true;
      this.data[14].options[7].coment = "";
    } else if (question == 63 && option == 265) {
      this.data[62].options[8].o_active = false;
    } else if (question == 63 && option != 265) {
      this.data[62].options[8].o_active = true;
      this.data[62].options[8].coment = "";
    }
  }
}
