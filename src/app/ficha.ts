import { Paciente } from './paciente';

export class Ficha {
    tipoDeComida :string;
    comidaPrincipal: string;
    comidaSecundaria: string;
    bebida: string;
    postre: string;
    tentacion: boolean;
    tieneHambre: boolean;
    fechaYHora: Date = new Date();
    paciente: Paciente =  new Paciente();
    

}
