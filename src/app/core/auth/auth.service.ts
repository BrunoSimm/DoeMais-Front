import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(email: string, password: string){
    return this.http.post(environment.API_URL + `/user/login`, { email:email, password }, { observe: 'response' })
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken!);
    }));
  }
}
