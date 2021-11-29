import { Habitaciones } from "./Habitaciones";
import { Cuenta } from "./Cuenta";

export class Reservaciones {
    id_reservacion: number;
    valor: number;
    fec_inicio: string;
    fec_fin: string;
    fec_cambio: string;
    id_usuario_cambio: number;
    habitacion: Habitaciones;
    cuenta: Cuenta;

}