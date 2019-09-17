import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl:string
  private loggedIn: boolean;
  private usuarioLogueado:Paciente;
  constructor(private http: HttpClient) {
    this.loginUrl='http://localhost:8080/pacientes/login';
    
   }

   public login(usuario:string, contrasena:string){
     return this.http.post(this.loginUrl,{
       usuario:usuario,
       contrasena:contrasena
     },{responseType:'json'})
   }
   public setUsuarioLogueado(paciente: Paciente){
     this.loggedIn=true;
     this.usuarioLogueado = paciente;
     console.log(this.usuarioLogueado);
     sessionStorage.setItem('currentUser',JSON.stringify(paciente));

   }
   public getUsuarioLogueado(){
     return JSON.parse(sessionStorage.getItem('currentUser'));
   }

   public estaLogueado(){
     return this.loggedIn;
   }
   public salir(){
     sessionStorage.removeItem('currentUser');
     this.loggedIn=false;
   }
}
