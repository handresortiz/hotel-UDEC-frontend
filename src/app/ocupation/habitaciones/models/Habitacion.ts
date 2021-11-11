import { Estado } from "./Estado";
import { Tipo } from "./Tipo";
import { Reserva } from "./Reserva";

export class Habitacion {
    id: number;
    numeroCamas: number;
    piso: number;
    observacion: string;
    estado: Estado;
    tipo: Tipo;
    items: Array<Reserva> = [];
}