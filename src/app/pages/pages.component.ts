import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren
} from "@angular/core";
import { HomeComponent } from "./home/home.component";
declare function init_plugins();
@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html"
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_plugins();
  }
}
