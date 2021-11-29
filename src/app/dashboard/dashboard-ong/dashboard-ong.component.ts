import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { NewUserONG } from 'src/app/home/signup/new-user-ong';

@Component({
  selector: 'app-dashboard-ong',
  templateUrl: './dashboard-ong.component.html',
  styleUrls: ['./dashboard-ong.component.scss']
})
export class DashboardOngComponent implements OnInit {

  user: Observable<NewUserONG>;

  constructor(private router: Router, private userService: UserService) {
    this.user = userService.getUser();
    console.log(this.user);  
  }

  ngOnInit(): void {
    
  }

}
