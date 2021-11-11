import { Reserva } from './reserva'

export interface Cuenta{
    id_cuenta: number,
    id_huesped: number,
    total: number,
    fec_creada: string,
    reservas: Reserva[]
}