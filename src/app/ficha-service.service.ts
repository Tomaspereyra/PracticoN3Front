import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ficha } from './ficha';

@Injectable({
  providedIn: 'root'
})
export class FichaServiceService {
  fichaUrl:string;

  constructor(private httpCliente:HttpClient) {
    this.fichaUrl='http://localhost:8080/ingresarFicha';

   }
   public  guardar(ficha:Ficha){
    return this.httpCliente.post<Ficha>(this.fichaUrl,ficha);

   }
}
