import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { NewUserDoador } from './new-user-doador';

import { NewUserONG } from './new-user-ong';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpFormONG!: FormGroup;
  signUpFormDoador!: FormGroup;
  radioForm: any; //ONG ou Doador
  @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signUpFormONG = this.formBuilder.group({
      email: ['', 
        [
          Validators.required, 
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      representante: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/),
        ]
      ],
      
      finalidade: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      registro: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
     /* userName: ['', 
        [ //Validadores sincronos.
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2), 
          Validators.maxLength(30)
        ],
        [ //Validadores assincronos.
          this.userNotTakenValidatorService.checkUserNameTaken()
        ]
      ],*/
      password: ['',
        [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(30)
        ]
      ]
    });

    this.signUpFormDoador = this.formBuilder.group({
      email: ['', 
        [
          Validators.required, 
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      cpf: ['',
        [
          Validators.required,
          Validators.pattern(/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/),
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/),
        ]
      ],
      password: ['',
        [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(30)
        ]
      ]
    });
  }

  signUp(){
    if(this.radioForm == 'doador'){
      const newUser = this.signUpFormDoador.getRawValue() as NewUserDoador;
      this.signUpService.signUpDoador(newUser)
      .subscribe(() => {
        this.router.navigate(['']);
      }, err => console.log(err));
    }

    if (this.radioForm == 'ong'){
      const newUserOng = this.signUpFormONG.getRawValue() as NewUserONG;
      this.signUpService.signUpONG(newUserOng)
        .subscribe(() => {
          this.router.navigate(['']);
        }, err => console.log(err));
    }
  }

}
