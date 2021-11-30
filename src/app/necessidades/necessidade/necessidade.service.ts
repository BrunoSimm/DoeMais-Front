import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "src/app/itens/item/item";
import { environment } from "src/environments/environment";
import { Necessidade } from "./necessidade";
import { NewNecessidade } from "./new-necessidade";

@Injectable({
    providedIn: 'root'
})
export class NecessidadeService {

    itemToCreate!: Item;

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    listNecessidades(){
        return this.httpClient.get<Necessidade[]>(environment.API_URL + `/necessidades`);
    }

    getNecessidade(id: number){
        return this.httpClient.get<Necessidade[]>(environment.API_URL + `/necessidades/${id}`);
    }

    listNecessidadesPaginated(page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
        return this.httpClient.get<Necessidade[]>(environment.API_URL + '/necessidades', { params: params });
    }

    checkNecessidadeTaken(itemId: number){ //Verificar se uma necessidade (Item) já existe para a ONG logada.
        return this.httpClient.get(environment.API_URL + '/necessidades/exists/' + itemId);
    } 
    
    addNecessidade(necessidade: NewNecessidade){
        let fakeNecessidade = {
            name: this.itemToCreate.name,
            description: this.itemToCreate.description,
            image: this.itemToCreate.image,
            active: true,
            idItem: this.itemToCreate.id,
            expectedQuantity: necessidade.expectedQuantity,
            currentQuantity: necessidade.currentQuantity,
            limitDate: necessidade.limitDate,
            status: necessidade.status
        }
        environment.necessidades_fake.push(fakeNecessidade);
        return this.httpClient.post(environment.API_URL + '/necessidades', necessidade);
    }

    bindItemToCreate(item: Item){
        this.itemToCreate = item;
    }

    getBindedItem(){
        return this.itemToCreate;
    }

    verifyIfNecessidadeExists(item: Item) {
        return this.httpClient.get(environment.API_URL + '/necessidades/exists/' + item.id);
    }
      
}