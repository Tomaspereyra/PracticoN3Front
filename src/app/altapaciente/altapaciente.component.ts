import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altapaciente',
  templateUrl: './altapaciente.component.html',
  styleUrls: ['./altapaciente.component.css']
})
export class AltapacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sexo = [{name:'Masculino'},{name:'Femenino'},{name:'Otro'}]
}
