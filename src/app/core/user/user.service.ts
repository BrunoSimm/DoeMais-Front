import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private fakeUser = null!;
  private userName: string = '';

  private userSubject = new BehaviorSubject<User>(this.fakeUser);

  constructor(private tokenService: TokenService) { 
    if(this.tokenService.hasToken()){
      this.decodeAndNotify();
    }
  }

  setToken(token:string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwtDecode(token!) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(this.fakeUser);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  getUserName(){
    return this.userName;
  }
}
