import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  {
    path: "login",
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)
  },
  {
    path: "**",
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)
  }
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
