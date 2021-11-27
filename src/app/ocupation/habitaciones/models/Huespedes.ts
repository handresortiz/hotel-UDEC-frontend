import { Usuario } from './Usuario';
import { Persona } from './Persona';

export class Huespedes {
    id_huesped: number;
    usuario: Usuario;
    fec_cambio: string;
    id_usuario_cambio: string;
    persona: Persona;
}