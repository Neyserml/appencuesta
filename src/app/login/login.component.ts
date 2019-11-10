import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { UserService } from "../core/user.service";
import { Login } from "../models/login";
declare function init_plugins();
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  public loginForm: FormGroup;
  mLogin: Login;
  message = "";
  constructor(private router: Router, private userService: UserService) {
    this.mLogin = new Login();
  }

  ngOnInit() {
    init_plugins();
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  public auth() {
    let dataUser = {
      usuario: this.loginForm.controls["username"].value,
      clave: this.loginForm.controls["password"].value
    };
    this.userService.login(dataUser).subscribe(
      result => {
        if (result.success) {
          this.mLogin.dni = result.data.dni;
          this.mLogin.nombres = result.data.names;
          this.mLogin.apellidos = result.data.lastname;
          this.createSession(this.mLogin);
          this.router.navigate(["/encuesta"]);
        } else {
          this.message = "Credenciales incorrectas...!!!";
        }
      },
      error => {
        console.log("Error:", error);
      }
    );
  }
  createSession(data) {
    this.clearLocalStorage();
    localStorage.setItem("isLogged", "true");
    localStorage.setItem("userLogged", JSON.stringify(data));
  }
  clearLocalStorage() {
    localStorage.setItem("isLogged", "true");
    localStorage.removeItem("userLogged");
  }
}
