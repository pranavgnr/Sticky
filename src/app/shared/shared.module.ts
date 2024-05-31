import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FootbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FootbarComponent
  ]
})
export class SharedModule { }
