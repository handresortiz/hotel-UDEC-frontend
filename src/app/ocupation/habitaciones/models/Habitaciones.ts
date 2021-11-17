import { TipoHabitacion } from "./TipoHabitacion";

export class Habitaciones {
    id_habitacion: number;
    tipo: TipoHabitacion;
    num_habitacion: number;
    fec_cambio: string;
    id_usuario_cambio: number;
    limpieza: boolean;
    estado: string;
    mantenimiento: boolean;
}