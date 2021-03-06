import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import {
  MatRadioModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { SurveyComponent } from "./survey/survey.component";

@NgModule({
  declarations: [PagesComponent, HomeComponent, SurveyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
