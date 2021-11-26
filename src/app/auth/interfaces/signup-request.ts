export interface SignupRequest {

    pri_nombre: string;
    seg_nombre: string;
    pri_apellido: string;
    seg_apellido: string;
    identificacion: number;
    telefono: string;
    razon_social: string;
    direccion: string;
    genero: string;
    login: string;
    role?: string[];
    clave: string;
}
