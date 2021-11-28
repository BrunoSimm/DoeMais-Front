export interface NewUserDoador {
    email: string,
    password: string,
    fullName: string,
    phone: string,
    cpf: string,
    estadoDaConta: boolean // {Ativa, Inativa, Bloqueada}
}