import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import jwtDecode from 'jwt-decode';
import { NewUserONG } from 'src/app/home/signup/new-user-ong';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private fakeUser = null!;
  private userData: any;
  private userName: string = '';

  private userSubject = new BehaviorSubject<NewUserONG>(this.fakeUser);

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

  getUserData(){
    return this.userData;
  }

  setUserData(userData:any){
    this.userData = userData;
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwtDecode(token!) as NewUserONG;
    this.userName = user.fullName;
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
