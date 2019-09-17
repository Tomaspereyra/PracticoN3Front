import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {
  private pacientesUrl: string;



  constructor(private http:HttpClient) {
    this.pacientesUrl = 'http://localhost:8080/pacientes';
   }
   public traerTodos():Observable<Paciente[]>{
     return this.http.get<Paciente[]>(this.pacientesUrl);

   }
   public insertar(paciente: Paciente){    
    
     return this.http.post<Paciente>('http://localhost:8080/pacientes/insertar',paciente)
   }
   
}
