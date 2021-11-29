export interface NewUserONG {
    email: string,
    password: string,
    fullName: string,
    phone: string,
    finalidade: string,
    representante: string,
    registro: string,
    dominio: string,
    estadoDaConta: string // {Ativa, Inativa, Bloqueada}
}