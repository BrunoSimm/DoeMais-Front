import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { NewUserDoador } from "./new-user-doador";

import { NewUserONG } from "./new-user-ong";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    userCreated: boolean = false;

    constructor(private httpClient: HttpClient){}

    checkUserNameTaken(userName: string){
        return this.httpClient.get(environment.API_URL + '/user/exists/' + userName);
    }

    signUpDoador(newUser: NewUserDoador){
        return this.httpClient.post(environment.API_URL + '/cadastro/doador', newUser);
    }

    signUpONG(newUser: NewUserONG){
        return this.httpClient.post(environment.API_URL + '/cadastro/ong', newUser);
    }

    setUserCreated(userCreated: boolean){
        this.userCreated = userCreated;
    }

    getUserCreated(){
        return this.userCreated;
    }
}