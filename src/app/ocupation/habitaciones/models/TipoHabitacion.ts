import { Habitaciones } from "./Habitaciones";
import { GaleriaHabitacion } from "./GaleriaHabitacion";

export class TipoHabitacion {
    id_tipo_habitacion: number;
    nom_tipo_habitacion: string;
    desc_tipo_habitacion: string;
    fec_cambio: string;
    id_usuario_cambio: number;
    precio_habitacion: number;
    num_adultos: number;
    num_niños: number;
    habitaciones: Array<Habitaciones> = [];
    galeria: Array<GaleriaHabitacion> = [];
}