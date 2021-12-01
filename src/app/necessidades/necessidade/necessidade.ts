export interface Necessidade {
    //Atributos Item
    name: string;
    description: string;
    image: string,
    active: boolean,
    idItem: number,

    //Atributos Necessidade
    id: number,
    quantidade_esperada: number,
    quantidade_atual: number,
    prazoLimite: Date,
    status: string
}