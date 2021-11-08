import { Habitacion } from "./habitacion";

export interface Reserva{
    id_reservacion: number,
    valor: number,
    fec_inicio: string,
    fec_fin: string,
    habitacion: Habitacion
}