import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginImplementComponent } from './login-implement/login-implement.component';

const login_routes: Routes = [
    { path: 'login-visualization', component: LoginImplementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(login_routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}