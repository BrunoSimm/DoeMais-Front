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
}