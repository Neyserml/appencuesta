import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { GuardService } from "../core/guard.guard";
import { SurveyComponent } from "./survey/survey.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "survey",
        component: SurveyComponent,
        canActivate: [GuardService]
      },
      { path: "", redirectTo: "/login", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
