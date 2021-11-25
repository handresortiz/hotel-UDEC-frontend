import {Persona} from './persona'
export interface Perfil{
    id_perfil: number,
    nom_perfil: string,
}
export interface Usuario{
    id_usuario?: number,
    persona: Persona,
    perfil: Perfil,
    login: string,
    clave: string
}