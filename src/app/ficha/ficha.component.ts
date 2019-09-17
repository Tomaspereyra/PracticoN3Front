import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Ficha } from '../ficha';
import { FichaServiceService } from '../ficha-service.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  ficha:Ficha;
  
  constructor(private route:ActivatedRoute,private router: Router, private fichaService: FichaServiceService) {
    this.ficha=new Ficha();
   }

  onSubmit(){
    this.ficha.paciente = JSON.parse(sessionStorage.getItem('currentUser'));
    this.fichaService.guardar(this.ficha).subscribe(res=>{console.log(res)});
    
    alert("Ficha ingresada");

  }

  ngOnInit() {
  }
  tipoDeComida = [{name:'DESAYUNO'},{name:'ALMUERZO'},{name:'MERIENDA'},{name:'CENA'}];


}
