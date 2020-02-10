import { Component, OnInit } from "@angular/core";
import { AnswersService } from "src/app/core/answers.service";
import { DataService } from "../../core/data.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Login } from "../../models/login";
import Swal from "sweetalert2";
@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  public documentForm: FormGroup;
  dataAnswers: [any];
  dataOnlyAnswers: [any];
  userLogged: Login;
  dni = "";
  data = [];
  parTotal = 0;
  total = 0;
  quest;
  region: [any];
  departament: [any];
  arraydepa = [];
  surveyhability: Boolean = false;
  messageAlert: Boolean = true;
  iddepartament: Number;
  opciones = [];
  classdepartament;

  disabled7b: Boolean = true;
  disabled7c: Boolean = true;
  disabled8b: Boolean = true;
  disabled11c: Boolean = true;
  disabled25a: Boolean = true;
  isLoading = false;
  checked7b: Boolean = false;
  //preguntas
  question1 = [];
  question2 = [];
  question3 = [];
  question4 = [];
  question5 = [];
  question6 = [];
  question7 = [];
  question8 = [];
  question9 = [];
  question10 = [];
  question11 = [];
  question12 = [];
  question13 = [];
  question14 = [];
  question15 = [];
  question16 = [];
  question17 = [];
  question18 = [];
  question19 = [];
  question20 = [];
  question21 = [];
  question22 = [];
  question23 = [];
  question24 = [];
  question25 = [];
  question26 = [];
  question27 = [];
  question28 = [];
  question29 = [];
  question30 = [];
  question31 = [];
  question32 = [];
  question33 = [];
  question34 = [];
  question35 = [];
  question36 = [];
  question37 = [];
  question38 = [];
  question39 = [];
  question40 = [];
  question41 = [];
  question42 = [];
  question43 = [];
  question44 = [];
  question45 = [];
  question46 = [];
  question47 = [];
  question48 = [];
  question49 = [];
  question50 = [];
  question51 = [];
  question52 = [];
  question53 = [];
  question54 = [];
  question55 = [];
  question56 = [];
  question57 = [];
  question58 = [];
  question59 = [];
  question60 = [];
  question61 = [];
  question62 = [];
  question63 = [];
  question64 = [];
  question65 = [];
  question66 = [];
  question67 = [];
  question68 = [];
  question69 = [];
  question70 = [];
  question71 = [];
  diabaledButtonSave = false;
  constructor(
    public dataService: DataService,
    public answersService: AnswersService
  ) {
    this.userLogged = JSON.parse(localStorage.getItem("userLogged")) as Login;
    this.dni = this.userLogged.dni.toString();
  }

  ngOnInit() {
    this.getAnswers();
    this.getDepartaments();
  }

  public save() {
    //console.log("data", this.opciones);

    var falta = "";
    let preg1 = this.opciones.findIndex(ob => ob.question === 1);
    if (preg1 === -1) {
      falta += "Sexo, ";
    }
    let preg2 = this.opciones.findIndex(ob => ob.question === 2);
    if (preg2 === -1) {
      falta += "Edad, ";
    }

    let preg3 = this.opciones.findIndex(ob => ob.question === 3);
    if (preg3 === -1) {
      falta += "Vivo en, ";
    }
    let preg4 = this.opciones.findIndex(ob => ob.question === 4);
    if (preg4 === -1) {
      falta += "2, ";
    }
    let preg5 = this.opciones.findIndex(ob => ob.question === 5);
    if (preg5 === -1) {
      falta += "3.a, ";
    }
    let preg6 = this.opciones.findIndex(ob => ob.question === 6);
    if (preg6 === -1) {
      falta += "3.b, ";
    }
    let preg7 = this.opciones.findIndex(ob => ob.question === 7);
    if (preg7 === -1) {
      falta += "4.a, ";
    }
    let preg8 = this.opciones.findIndex(ob => ob.question === 8);
    if (preg8 === -1) {
      falta += "4.b, ";
    }
    let preg9 = this.opciones.findIndex(ob => ob.question === 9);
    if (preg9 === -1) {
      falta += "5, ";
    }
    let preg10 = this.opciones.findIndex(ob => ob.question === 10);
    if (preg10 === -1) {
      falta += "6, ";
    }
    let preg11 = this.opciones.findIndex(ob => ob.question === 11);
    if (preg11 === -1) {
      falta += "7.a, ";
    }

    let preg1137 = this.opciones.findIndex(
      ob => ob.question === 11 && ob.option === 37
    );
    if (preg1137 !== -1) {
      let preg12 = this.opciones.findIndex(ob => ob.question === 12);
      if (preg12 === -1) {
        falta += "7.b, ";
      }
      let preg13 = this.opciones.findIndex(ob => ob.question === 13);
      if (preg13 === -1) {
        falta += "7.c, ";
      }
    }
    let preg14 = this.opciones.findIndex(ob => ob.question === 14);
    if (preg14 === -1) {
      falta += "8.a, ";
    }
    let preg1451 = this.opciones.findIndex(
      ob => ob.question === 14 && ob.option === 53
    );

    if (preg1451 !== -1) {
      let preg15 = this.opciones.findIndex(ob => ob.question === 15);
      if (preg15 === -1) {
        falta += "8.b, ";
      }
    }
    let preg16 = this.opciones.findIndex(ob => ob.question === 16);
    if (preg16 === -1) {
      falta += "9.a, ";
    }
    let preg17 = this.opciones.findIndex(ob => ob.question === 17);
    if (preg17 === -1) {
      falta += "9.b, ";
    }
    let preg18 = this.opciones.findIndex(ob => ob.question === 18);
    if (preg18 === -1) {
      falta += "9.c, ";
    }
    let preg19 = this.opciones.findIndex(ob => ob.question === 19);
    if (preg19 === -1) {
      falta += "9.d, ";
    }
    let preg20 = this.opciones.findIndex(ob => ob.question === 20);
    if (preg20 === -1) {
      falta += "9.e, ";
    }
    let preg21 = this.opciones.findIndex(ob => ob.question === 21);
    if (preg21 === -1) {
      falta += "9.f, ";
    }
    let preg22 = this.opciones.findIndex(ob => ob.question === 22);
    if (preg22 === -1) {
      falta += "9.g, ";
    }
    let preg23 = this.opciones.findIndex(ob => ob.question === 23);
    if (preg23 === -1) {
      falta += "9.h, ";
    }
    let preg24 = this.opciones.findIndex(ob => ob.question === 24);
    if (preg24 === -1) {
      falta += "9.i, ";
    }
    let preg25 = this.opciones.findIndex(ob => ob.question === 25);
    if (preg25 === -1) {
      falta += "9.j, ";
    }
    let preg26 = this.opciones.findIndex(ob => ob.question === 26);
    if (preg26 === -1) {
      falta += "9.k, ";
    }
    let preg27 = this.opciones.findIndex(ob => ob.question === 27);
    if (preg27 === -1) {
      falta += "9.l, ";
    }
    let preg28 = this.opciones.findIndex(ob => ob.question === 28);
    if (preg28 === -1) {
      falta += "9.m, ";
    }
    let preg29a = this.opciones.findIndex(ob => ob.question === 29);
    if (preg29a === -1) {
      falta += "9.n, ";
    }
    let preg30 = this.opciones.findIndex(ob => ob.question === 30);
    if (preg30 === -1) {
      falta += "10.1, ";
    }
    let preg31 = this.opciones.findIndex(ob => ob.question === 31);
    if (preg31 === -1) {
      falta += "10.2, ";
    }
    let preg32 = this.opciones.findIndex(ob => ob.question === 32);
    if (preg32 === -1) {
      falta += "10.3, ";
    }
    let preg33 = this.opciones.findIndex(ob => ob.question === 33);
    if (preg33 === -1) {
      falta += "11.a, ";
    }

    let preg32134 = this.opciones.findIndex(
      ob => ob.question === 33 && ob.option === 142
    );

    if (preg32134 !== -1) {
      let preg33 = this.opciones.findIndex(ob => ob.question === 34);
      if (preg33 === -1) {
        falta += "11.b, ";
      }
    }
    let preg35 = this.opciones.findIndex(ob => ob.question === 35);
    if (preg35 === -1) {
      falta += "12, ";
    }
    let preg36 = this.opciones.findIndex(ob => ob.question === 36);
    if (preg36 === -1) {
      falta += "13.a, ";
    }
    let preg37 = this.opciones.findIndex(ob => ob.question === 37);
    if (preg37 === -1) {
      falta += "13.b, ";
    }
    let preg38 = this.opciones.findIndex(ob => ob.question === 38);
    if (preg38 === -1) {
      falta += "14.a, ";
    }
    let preg39 = this.opciones.findIndex(ob => ob.question === 39);
    if (preg39 === -1) {
      falta += "14.b, ";
    }
    let preg40 = this.opciones.findIndex(ob => ob.question === 40);
    if (preg40 === -1) {
      falta += "15, ";
    }
    let preg41 = this.opciones.findIndex(ob => ob.question === 41);
    if (preg41 === -1) {
      falta += "16, ";
    }
    let preg42 = this.opciones.findIndex(ob => ob.question === 42);
    if (preg42 === -1) {
      falta += "17, ";
    }
    let preg43 = this.opciones.findIndex(ob => ob.question === 43);
    if (preg43 === -1) {
      falta += "18, ";
    }
    let preg44 = this.opciones.findIndex(ob => ob.question === 44);
    if (preg44 === -1) {
      falta += "19.a, ";
    }
    let preg45 = this.opciones.findIndex(ob => ob.question === 45);
    if (preg45 === -1) {
      falta += "19.b, ";
    }
    let preg46 = this.opciones.findIndex(ob => ob.question === 46);
    if (preg46 === -1) {
      falta += "19.c, ";
    }
    let preg47 = this.opciones.findIndex(ob => ob.question === 47);
    if (preg47 === -1) {
      falta += "20, ";
    }
    let preg48 = this.opciones.findIndex(ob => ob.question === 48);
    if (preg48 === -1) {
      falta += "21, ";
    }
    let preg49 = this.opciones.findIndex(ob => ob.question === 49);
    if (preg49 === -1) {
      falta += "22.a, ";
    }
    let preg50 = this.opciones.findIndex(ob => ob.question === 50);
    if (preg50 === -1) {
      falta += "22.b, ";
    }
    let preg51 = this.opciones.findIndex(ob => ob.question === 51);
    if (preg51 === -1) {
      falta += "22.c, ";
    }
    let preg52 = this.opciones.findIndex(ob => ob.question === 52);
    if (preg52 === -1) {
      falta += "22.d, ";
    }
    let preg53 = this.opciones.findIndex(ob => ob.question === 53);
    if (preg53 === -1) {
      falta += "22.e, ";
    }
    let preg54 = this.opciones.findIndex(ob => ob.question === 54);
    if (preg54 === -1) {
      falta += "22.f, ";
    }
    let preg55 = this.opciones.findIndex(ob => ob.question === 55);
    if (preg55 === -1) {
      falta += "22.g, ";
    }
    let preg56 = this.opciones.findIndex(ob => ob.question === 56);
    if (preg56 === -1) {
      falta += "22.h, ";
    }
    let preg57 = this.opciones.findIndex(ob => ob.question === 57);
    if (preg57 === -1) {
      falta += "22.i, ";
    }
    let preg58 = this.opciones.findIndex(ob => ob.question === 58);
    if (preg58 === -1) {
      falta += "22.j, ";
    }
    let preg59 = this.opciones.findIndex(ob => ob.question === 59);
    if (preg59 === -1) {
      falta += "22.k, ";
    }
    let preg60 = this.opciones.findIndex(ob => ob.question === 60);
    if (preg60 === -1) {
      falta += "23, ";
    }
    let preg61 = this.opciones.findIndex(ob => ob.question === 61);
    if (preg61 === -1) {
      falta += "24, ";
    }
    let preg62 = this.opciones.findIndex(ob => ob.question === 62);
    if (preg62 === -1) {
      falta += "25.1, ";
    }
    let preg63 = this.opciones.findIndex(ob => ob.question === 63);
    if (preg63 === -1) {
      falta += "25.2, ";
    }
    let preg64 = this.opciones.findIndex(ob => ob.question === 64);
    if (preg64 === -1) {
      falta += "25.3, ";
    }
    let preg65 = this.opciones.findIndex(ob => ob.question === 65);
    if (preg65 === -1) {
      falta += "25.4, ";
    }
    let preg62254 = this.opciones.findIndex(
      ob => ob.question === 65 && ob.option === 273
    );

    if (preg62254 !== -1) {
      let preg66 = this.opciones.findIndex(ob => ob.question === 66);
      if (preg66 === -1) {
        falta += "25.a, ";
      }
    }

    let preg65276 = this.opciones.findIndex(
      ob => ob.question === 65 && ob.option === 275
    );

    if (preg65276 !== -1) {
      let preg66 = this.opciones.findIndex(ob => ob.question === 66);
      if (preg66 === -1) {
        falta += "25.a, ";
      }
    }

    let preg67 = this.opciones.findIndex(ob => ob.question === 67);
    if (preg67 === -1) {
      falta += "26, ";
    }
    let preg68 = this.opciones.findIndex(ob => ob.question === 68);
    if (preg68 === -1) {
      falta += "27, ";
    }
    let preg69 = this.opciones.findIndex(ob => ob.question === 69);
    if (preg69 === -1) {
      falta += "28.1, ";
    }
    let preg70 = this.opciones.findIndex(ob => ob.question === 70);
    if (preg70 === -1) {
      falta += "28.2, ";
    }
    let preg71 = this.opciones.findIndex(ob => ob.question === 71);
    if (preg71 === -1) {
      falta += "29, ";
    }

    this.diabaledButtonSave = true;
    if (falta == "") {
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
                this.diabaledButtonSave = false;
                // window.location.reload();
              } else {
                Swal.fire("Error", response.message, "error");
                this.isLoading = false;
                this.diabaledButtonSave = false;
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
              this.diabaledButtonSave = false;
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Información", "Usted ha cancelado el envio", "error");
          this.isLoading = false;
          this.diabaledButtonSave = false;
        }
      });
    } else {
      Swal.fire(
        "Falta completar la encuesta",
        "Pregunta(s)=> " + falta,
        "error"
      );
      this.diabaledButtonSave = false;
    }
  }

  private restartSurvey() {
    this.opciones = [];
    this.resetInputs();
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

    // const selectDepart = document.getElementsByClassName("classdepartament");

    // for (let index = 0; index < selectDepart.length; index++) {
    //   const input = <HTMLSelectElement>selectDepart.item(index);
    //   input.value = "";
    // }
    this.classdepartament = "";
    this.surveyhability = false;
    this.messageAlert = true;
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
  public radioChange(event, question) {
    console.log("opcion", event.target.value);
    console.log("evento:", event.target.checked);
    console.log("pregunta", question);
    let tam = this.opciones.length;
    const option = event.target.value;

    if (tam == 0) {
      this.opciones.push({
        question: parseInt(question),
        option: parseInt(option),
        description: "",
        user: this.dni
      });
    } else {
      const resultado = this.opciones.filter(obj => obj.question == question)
        .length;
      if (resultado > 0) {
        if (question == 12 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 12 && event.target.checked == false) {
          let ind12 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind12 !== -1) {
            this.opciones.splice(ind12, 1);
          }
        } else if (question == 13 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 13 && event.target.checked == false) {
          let ind13 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind13 !== -1) {
            this.opciones.splice(ind13, 1);
          }
        } else if (question == 15 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 15 && event.target.checked == false) {
          let ind15 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind15 !== -1) {
            this.opciones.splice(ind15, 1);
          }
        } else if (question == 60 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 60 && event.target.checked == false) {
          let ind57 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind57 !== -1) {
            this.opciones.splice(ind57, 1);
          }
        } else if (question == 61 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 61 && event.target.checked == false) {
          let ind58 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind58 !== -1) {
            this.opciones.splice(ind58, 1);
          }
        } else if (question == 66 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 66 && event.target.checked == false) {
          let ind63 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind63 !== -1) {
            this.opciones.splice(ind63, 1);
          }
        } else if (question == 67 && event.target.checked) {
          this.opciones.push({
            question: parseInt(question),
            option: parseInt(option),
            description: "",
            user: this.dni
          });
        } else if (question == 67 && event.target.checked == false) {
          let ind64 = this.opciones.findIndex(
            ob =>
              ob.question === parseInt(question) &&
              ob.option === parseInt(option)
          );
          if (ind64 !== -1) {
            this.opciones.splice(ind64, 1);
          }
        } else {
          this.opciones.map(function(dato) {
            if (dato.question == question) {
              dato.option = parseInt(option);
              dato.description = "";
            }
            return dato;
          });
        }
      } else {
        this.opciones.push({
          question: parseInt(question),
          option: parseInt(option),
          description: "",
          user: this.dni
        });
      }
    }

    //habilitar y desabilutar preguntas
    if (question == 11 && option == 37) {
      this.disabled7b = false;
      this.disabled7c = false;
    } else if (question == 11 && option == 38) {
      this.disabled7b = true;
      this.disabled7c = true;

      //elimino elemento1
      let arrayel11 = this.opciones.filter(
        obj => obj.question == parseInt(question) + 1
      );
      arrayel11.forEach(element => {
        let indice = this.opciones.findIndex(
          ob => ob.option === element.option
        );
        if (indice !== -1) {
          this.opciones.splice(indice, 1);
        }
      });

      const inputsCollection11 = document.getElementsByClassName(
        "filled-in chk-col-blue"
      );
      for (let index = 0; index < inputsCollection11.length; index++) {
        const input11 = <HTMLInputElement>inputsCollection11.item(index);
        input11.checked = false;
      }
      //elimino elemento2
      let arrayel2 = this.opciones.filter(
        obj => obj.question == parseInt(question) + 2
      );

      arrayel2.forEach(element => {
        let indice = this.opciones.findIndex(
          ob => ob.option === element.option
        );
        if (indice !== -1) {
          this.opciones.splice(indice, 1);
        }
      });
      const inputsCollection7c = document.getElementsByClassName(
        "filled-in chk-col-blue 7c"
      );
      for (let index = 0; index < inputsCollection7c.length; index++) {
        const input7c = <HTMLInputElement>inputsCollection7c.item(index);
        input7c.checked = false;
      }
    } else if (question == 14 && option == 53) {
      this.disabled8b = false;
    } else if (question == 14 && option == 54) {
      this.disabled8b = true;

      let arrayel14 = this.opciones.filter(
        obj => obj.question == parseInt(question) + 1
      );
      arrayel14.forEach(element => {
        let indice = this.opciones.findIndex(
          ob => ob.option === element.option
        );
        if (indice !== -1) {
          this.opciones.splice(indice, 1);
        }
      });

      const inputsCollection14 = document.getElementsByClassName(
        "filled-in chk-col-blue 8b"
      );
      for (let index = 0; index < inputsCollection14.length; index++) {
        const input14 = <HTMLInputElement>inputsCollection14.item(index);
        input14.checked = false;
      }
    } else if (question == 33 && option == 142) {
      this.disabled11c = false;
    } else if (question == 33 && option == 143) {
      this.disabled11c = true;

      //elimino elemento
      let indice = this.opciones.findIndex(
        ob => ob.question === parseInt(question) + 1
      );
      if (indice !== -1) {
        this.opciones.splice(indice, 1);

        const inputsCollection3 = document.getElementsByClassName(
          "custom-control-input 11c"
        );
        for (let index = 0; index < inputsCollection3.length; index++) {
          const input3 = <HTMLInputElement>inputsCollection3.item(index);
          input3.checked = false;
        }
      }
    } else if (question == 65 && option == 273) {
      this.disabled25a = false;
    } else if (question == 65 && option == 274) {
      this.disabled25a = true;
      ///eliminacion de array
      let arrayel63 = this.opciones.filter(
        obj => obj.question == parseInt(question) + 1
      );
      arrayel63.forEach(element => {
        let indice = this.opciones.findIndex(
          ob => ob.option === element.option
        );
        if (indice !== -1) {
          this.opciones.splice(indice, 1);
        }
      });

      const inputsCollection4 = document.getElementsByClassName(
        "filled-in chk-col-blue 25a"
      );
      for (let index = 0; index < inputsCollection4.length; index++) {
        const input4 = <HTMLInputElement>inputsCollection4.item(index);
        input4.checked = false;
      }
    } else if (question == 65 && option == 275) {
      this.disabled25a = false;

      //elimino elemento
      ///eliminacion de array
      // let arrayel63 = this.opciones.filter(
      //   obj => obj.question == parseInt(question) + 1
      // );
      // arrayel63.forEach(element => {
      //   let indice = this.opciones.findIndex(
      //     ob => ob.option === element.option
      //   );
      //   if (indice !== -1) {
      //     this.opciones.splice(indice, 1);
      //   }
      // });

      // const inputsCollection4 = document.getElementsByClassName(
      //   "filled-in chk-col-blue 25a"
      // );
      // for (let index = 0; index < inputsCollection4.length; index++) {
      //   const input4 = <HTMLInputElement>inputsCollection4.item(index);
      //   input4.checked = false;
      // }
    }

    //habilitar y limpiar comentarios otros
    if (question == 12 && option == 47) {
      this.data[11].options[8].o_active = false;
    } else if (question == 12 && option != 47) {
      this.data[11].options[8].o_active = true;
      // this.data[11].options[7].coment = "";
    } else if (question == 15 && option == 63) {
      this.data[14].options[8].o_active = false;
    } else if (question == 15 && option != 63) {
      this.data[14].options[8].o_active = true;
      // this.data[14].options[7].coment = "";
    } else if (question == 66 && option == 284) {
      this.data[65].options[8].o_active = false;
    } else if (question == 66 && option != 284) {
      this.data[65].options[8].o_active = true;
      // this.data[62].options[8].coment = "";
    }
  }

  public deparChange(value) {
    this.surveyhability = true;
    this.messageAlert = false;
    this.iddepartament = value;
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
        // console.log("data preguntas:", this.data);
        //preguntas
        this.question1 = this.data[0];
        this.question2 = this.data[1];
        this.question3 = this.data[2];
        this.question4 = this.data[3];
        this.question5 = this.data[4];
        this.question6 = this.data[5];
        this.question7 = this.data[6];
        this.question8 = this.data[7];
        this.question9 = this.data[8];
        this.question10 = this.data[9];
        this.question11 = this.data[10];
        this.question12 = this.data[11];
        this.question13 = this.data[12];
        this.question14 = this.data[13];
        this.question15 = this.data[14];
        this.question16 = this.data[15];
        this.question17 = this.data[16];
        this.question18 = this.data[17];
        this.question19 = this.data[18];
        this.question20 = this.data[19];
        this.question21 = this.data[20];
        this.question22 = this.data[21];
        this.question23 = this.data[22];
        this.question24 = this.data[23];
        this.question25 = this.data[24];
        this.question26 = this.data[25];
        this.question27 = this.data[26];
        this.question28 = this.data[27];
        this.question29 = this.data[28];
        this.question30 = this.data[29];
        this.question31 = this.data[30];
        this.question32 = this.data[31];
        this.question33 = this.data[32];
        this.question34 = this.data[33];
        this.question35 = this.data[34];
        this.question36 = this.data[35];
        this.question37 = this.data[36];
        this.question38 = this.data[37];
        this.question39 = this.data[38];
        this.question40 = this.data[39];
        this.question41 = this.data[40];
        this.question42 = this.data[41];
        this.question43 = this.data[42];
        this.question44 = this.data[43];
        this.question45 = this.data[44];
        this.question46 = this.data[45];
        this.question47 = this.data[46];
        this.question48 = this.data[47];
        this.question49 = this.data[48];
        this.question50 = this.data[49];
        this.question51 = this.data[50];
        this.question52 = this.data[51];
        this.question53 = this.data[52];
        this.question54 = this.data[53];
        this.question55 = this.data[54];
        this.question56 = this.data[55];
        this.question57 = this.data[56];
        this.question58 = this.data[57];
        this.question59 = this.data[58];
        this.question60 = this.data[59];
        this.question61 = this.data[60];
        this.question62 = this.data[61];
        this.question63 = this.data[62];
        this.question64 = this.data[63];
        this.question65 = this.data[64];
        this.question66 = this.data[65];
        this.question67 = this.data[66];
        this.question68 = this.data[67];
        this.question69 = this.data[68];
        this.question70 = this.data[69];
        this.question71 = this.data[70];
      },
      error => {
        console.log("error en el servicio:", error);
      }
    );
  }
}
