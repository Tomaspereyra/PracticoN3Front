import { Component, OnInit } from '@angular/core';
import { PacienteServiceService } from '../paciente-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-altapaciente',
  templateUrl: './altapaciente.component.html',
  styleUrls: ['./altapaciente.component.css']
})
export class AltapacienteComponent implements OnInit {
  paciente : Paciente;
  constructor(private route:ActivatedRoute,private router: Router, private pacienteService: PacienteServiceService) { 
   this.paciente = new Paciente();
  }
  onSubmit(){
    this.pacienteService.insertar(this.paciente).subscribe();
  }

  ngOnInit() {
  }
  sexo = [{name:'Masculino'},{name:'Femenino'},{name:'Otro'}]
  tipoTratamiento = [{name:'ANOREXIA'},{name:'BULIMIA'},{name:'OBESIDAD'}]
}
