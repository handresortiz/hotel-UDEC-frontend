interface Imagen{
    id: number,
    url_imagen: string
}

export interface TipoHabitacion{
    id_tipo_habitacion: number, 
    nom_tipo_habitacion: string,
    desc_tipo_habitacion: string,
    precio_habitacion: number,
    num_adultos: number,
    num_ninos: number,
    galeria: Imagen[]
}