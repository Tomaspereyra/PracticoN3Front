import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  paciente: any;
  errorLogueo: boolean;
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit() {

  }
  public login(usuario:string,contrasena:string, event:Event){
    event.preventDefault();
    this.loginService.login(usuario,contrasena).subscribe(
      res=>{
        this.paciente= res;
        this.loginService.setUsuarioLogueado(this.paciente);
      },
      error=>{
        console.log("Error",error);
        this.errorLogueo=true;
      },
      ()=> this.navigate()
    );
  }
  navigate(){
    this.router.navigateByUrl('/ingresarFicha');
  }

}
