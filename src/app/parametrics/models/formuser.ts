import { Persona } from "./persona";

export interface FormUser{
    id_usuario?: number,
    persona: Persona,
    id_perfil: number,
    login: string,
    clave: string
}