import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaComponent } from './ficha/ficha.component';
import { AltapacienteComponent } from './altapaciente/altapaciente.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'ingresarFicha', component:FichaComponent},
  {path:'registrarPaciente',component:AltapacienteComponent},
  {path:'iniciarSesion',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
