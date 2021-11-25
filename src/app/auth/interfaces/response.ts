export interface Response {

    token: string;
    type: string;
    id: number;
    login: string;
    pri_nombre: string;
    seg_nombre: string;
    roles: Roles[]

}

export enum Roles {
    ROLE_CLIENT,
    ROLE_MODERATOR,
    ROLE_ADMIN
}
