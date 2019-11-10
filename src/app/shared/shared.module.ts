import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
