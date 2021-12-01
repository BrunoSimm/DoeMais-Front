import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { SignUpService } from '../signup/signup.service';

@Component({
  selector: 'ap-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;
  userCreatedSucess: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private signUpService: SignUpService) {
      this.userCreatedSucess = this.signUpService.getUserCreated();
     }

  ngOnInit(): void {
    this.userCreatedSucess = this.signUpService.getUserCreated();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm.reset();
  }

  login(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(email,password)
      .subscribe(() => { //Sucesso
        this.signUpService.setUserCreated(false);
        this.router.navigate(['dashboard', 'ong']);
      }, () => {//Erro
        alert("ERRO! E-mail ou Senha inválidos!")
        this.loginForm.reset();
      });
  }

}
