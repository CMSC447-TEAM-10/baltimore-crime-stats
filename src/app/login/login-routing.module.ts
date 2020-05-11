import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginImplementComponent } from './login-page/login-implement/login-implement.component';
import { LogoutImplementComponent } from './login-page/logout-implement/logout-implement.component';

const login_routes: Routes = [
    { path: 'login-visualization', component: LoginImplementComponent},
    { path: 'login-visualization/login', component: LoginImplementComponent },
    { path: 'login-visualization/logout', component: LogoutImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(login_routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}