import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { PartidosComponent } from './partidos/partidos.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"main", component: MainComponent, title:"Landing Page"},
  {path:"login", component: LoginComponent, title:"login"},
  {path:"register", component: RegisterComponent, title:"register"},
  {path:"verify/:mail", component:VerifyComponent, title:"verify"},
  {path:"partidos", component:PartidosComponent, title:"partidos"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
