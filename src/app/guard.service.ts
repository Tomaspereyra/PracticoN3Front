import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router:Router,private loginService:LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.loginService.getUsuarioLogueado()){
    
      return true;
    }else{
    this.router.navigateByUrl('/iniciarSesion');
    return false;
  }
  }
}
