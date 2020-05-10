import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginImplementComponent } from './login-page/login-implement/login-implement.component';
import { LogoutImplementComponent } from './login-page/logout-implement/logout-implement.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginPageComponent, LoginImplementComponent, LogoutImplementComponent],
  imports: [
    CommonModule, LoginRoutingModule
  ]
})
export class LoginModule { }
