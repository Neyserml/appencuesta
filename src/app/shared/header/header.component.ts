import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../../models/login";
import { HomeComponent } from "src/app/pages/home/home.component";
import { DataService } from "src/app/core/data.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userLogged: Login;
  nombres = "";
  dni = "";

  constructor(private router: Router, public dataService: DataService) {
    this.userLogged = JSON.parse(localStorage.getItem("userLogged")) as Login;
    this.nombres =
      this.userLogged.nombres.toString() +
      " " +
      this.userLogged.apellidos.toString();
    this.dni = this.userLogged.dni.toString();
  }

  ngOnInit() {}

  public logout() {
    localStorage.removeItem("userLogged");
    this.router.navigate(["/login"]);
  }
}
