import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginImplementComponent } from './login-implement/login-implement.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginImplementComponent],
  imports: [
    CommonModule, LoginRoutingModule
  ]
})
export class LoginModule { }
