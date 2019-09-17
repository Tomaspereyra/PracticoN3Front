import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './ficha/ficha.component';
import { HttpClientModule } from '@angular/common/http';
import { FichaServiceService } from './ficha-service.service';
import { AltapacienteComponent } from './altapaciente/altapaciente.component';
import { PacienteServiceService } from './paciente-service.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { HeaderComponent } from './header/header.component';
import { SqlWebService } from './sql-web.service';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    AltapacienteComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [FichaServiceService,PacienteServiceService,LoginService,SqlWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
