import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemAddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemAddForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      description: ['',
        [
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ]
      ],
      image: ['',
        [
          Validators.required,
          Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
          )
        ]
      ]
    });
  }

  signUp(){
    /*
    const newUser = this.signUpFormDoador.getRawValue() as NewUserDoador;
    this.signUpService.signUpDoador(newUser)
      .subscribe(() => {
      this.router.navigate(['']);
    }, err => console.log(err));*/
  }

}
