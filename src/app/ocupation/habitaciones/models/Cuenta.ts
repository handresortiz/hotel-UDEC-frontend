import { Huespedes } from "./Huespedes";
import { Reservaciones } from "./Reservaciones";

export class Cuenta {
    id_cuenta: number;
    huesped: Huespedes;
    total: number;
    fec_creada: string;
    fec_cambio: string;
    id_usuario_cambio: number;
    reservas: Array<Reservaciones> = [];
}