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

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    AltapacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [FichaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
