import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AnswersService } from "src/app/core/answers.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
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

  public documentForm: FormGroup;
  constructor(private answersService: AnswersService) {}

  ngOnInit() {
    this.getAnswers();
    this.documentForm = new FormGroup({
      a_opcion: new FormControl("", [Validators.required])
    });
  }
  public getAnswers() {
    this.answersService.getAnswers().subscribe(
      respose => {
        this.dataAnswers = respose.answers;
        this.dataOnlyAnswers = respose.onlyAnswers;
        this.dataOnlyAnswers.forEach(element => {
          let options = this.dataAnswers.filter(
            obj => obj.q_id == element.q_id
          );
          this.data.push({
            answers: element.q_description,
            idanswers: element.q_id,
            options: options
          });
        });

        console.log("data", this.data);
      },
      error => {
        console.log("error en el servicio:", error);
      }
    );
  }

  public save() {
    // let data = this.documentForm.controls["a_opcion"].value;
    // this.opciones.push(data);
    console.log("arreglo", this.opciones);
  }

  getOpcion(option, question) {
    this.opciones.push({
      question: question,
      option: option
    });
    console.log("log desde opc", this.opciones);

    this.opciones.map(function(dato) {
      if (dato.question == question) {
        dato.option = option;
      }
      return dato;
    });
  }
}
