import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Item } from "./item";

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    listItens(){
        return this.httpClient.get<Item[]>(environment.API_URL + `/itens`);
    }

    listItensPaginated(page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
        return this.httpClient.get<Item[]>(environment.API_URL + '/itens', { params: params });
    }

    checkNameTaken(name: string){
        return this.httpClient.get(environment.API_URL + '/itens/exists/' + name);
    } 
    
    addItem(item: Item){
        return this.httpClient.post(environment.API_URL + '/itens', item);
    }
}