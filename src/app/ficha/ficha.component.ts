import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Ficha } from '../ficha';
import { FichaServiceService } from '../ficha-service.service';
import { SqlWebService } from '../sql-web.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  ficha:Ficha;
  
  constructor(private route:ActivatedRoute,private router: Router, private fichaService: FichaServiceService, private websql: SqlWebService ) {
    this.ficha=new Ficha();
   }

  onSubmit(){
    this.ficha.paciente = JSON.parse(sessionStorage.getItem('currentUser'));
    this.fichaService.guardar(this.ficha).subscribe(res=>{console.log(res)});
   // this.websql.guardar(this.ficha);
    alert("Ficha ingresada");

  }

  ngOnInit() {
  }


}
