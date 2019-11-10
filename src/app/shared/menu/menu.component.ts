import { Component, OnInit, OnDestroy } from "@angular/core";
import { Login } from "../../models/login";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  userLogged: Login;
  nombres = "";
  constructor() {
    this.userLogged = JSON.parse(localStorage.getItem("userLogged")) as Login;
    this.nombres = this.userLogged.nombres.toString();
  }

  ngOnInit() {}
}
