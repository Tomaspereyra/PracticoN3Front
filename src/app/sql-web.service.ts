import { Injectable } from '@angular/core';
import { Ficha } from './ficha';

@Injectable({
  providedIn: 'root'
})
export class SqlWebService {
  private instanciaBd;
  constructor() { 
  }
  public guardar(ficha:Ficha) {
    let request = indexedDB.open("saludable",2);
    let db;

    request.onerror = function(event){
      console.log("error");

    }
    request.onupgradeneeded = function(event) {
      
      let objectStore = db.createObjectStore("fichas", {keyPath: "id"});
        objectStore.add(ficha.comidaPrincipal);
        objectStore.add(ficha.comidaSecundaria);
        objectStore.add(ficha.fechaYHora);
        objectStore.add(ficha.paciente);
        objectStore.add(ficha.postre);
        objectStore.add(ficha.tentacion);
        objectStore.add(ficha.tieneHambre);
        objectStore.add(ficha.tieneHambre);

    }
   
    request.onsuccess = function(event){
      db = request.result;
      console.log("Conectado con exito:"+db);  
      request.onupgradeneeded;       

      let req = db.transaction("readwrite")
      .objectStore("fichas")
      .add(ficha);
    
      req.onsuccess = function(event) {
         alert("Ficha agregada a la base de datos web");
      };
    
      req.onerror = function(event) {
        alert("Error, no se pudo insertar en base de datos web");
     }
    
    }

    
 }

}
