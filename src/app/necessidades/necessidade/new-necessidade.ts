export interface NewNecessidade {
    //Atributos Item
    //name: string;
    //description: string;
    //image: string,
    //active: boolean,
    idItem: number,

    //Atributos Necessidade
    expectedQuantity: number,
    currentQuantity: number,
    limitDate: Date,
    status: string
}