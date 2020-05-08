import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginImplementComponent } from './login-implement/login-implement.component';



@NgModule({
  declarations: [LoginImplementComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginImplementComponent]
})
export class LoginModule { }
