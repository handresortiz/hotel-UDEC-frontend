import {Cliente} from "./Cliente";

export class Reserva{
    id: number;
    precio : number;
    fecha_entrada : string;
    fecha_salida : string;
    observacion : string;
    cliente: Cliente;
    estado: boolean;
}