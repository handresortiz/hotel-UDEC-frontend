export class Producto{
    id_producto?: number;
    id_categoria: number;
    nom_producto: string;
    desc_producto: string;
    fec_cambio: Date;
    id_usuario_cambio: number;
    precio_producto: number;
    unidades_existentes: number;

    constructor(id_categoria: number, nom_producto: string, desc_producto: string, fec_cambio: Date, id_usuario_cambio: number, precio_producto: number, unidades_existentes: number){
        this.id_categoria = id_categoria;
        this.nom_producto = nom_producto;
        this.desc_producto = desc_producto;
        this.fec_cambio = fec_cambio;
        this.id_usuario_cambio = id_usuario_cambio;
        this.precio_producto = precio_producto;
        this.unidades_existentes = unidades_existentes;
    }
}