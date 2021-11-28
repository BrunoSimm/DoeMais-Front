import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    listFromUser(userName: string){
        return this.httpClient.get<Photo[]>(API + `${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
    
        return this.httpClient.get<Photo[]>(API + userName + '/photos', { params: params });
    }
}