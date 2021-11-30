import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item/item';
import { ItemNotTakenValidatorService } from '../item/item-not-taken.validator.service';
import { ItemService } from '../item/item.service';


@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemAddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private itensService: ItemService, private itemNotTakenService: ItemNotTakenValidatorService, private router: Router) { }

  ngOnInit(): void {
    this.itemAddForm = this.formBuilder.group({
      name: ['',
        [//Validadores sincronos.
          Validators.required,
          Validators.minLength(2), 
          Validators.maxLength(60)
        ],
        [//Validadores assincronos.
          this.itemNotTakenService.checkNameTaken()
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

  addItem(){
    const item = this.itemAddForm.getRawValue() as Item;
    console.log(item);
    this.itensService.addItem(item).subscribe(() => {
      this.router.navigate(['itens']);
    });
    /*
    const newUser = this.signUpFormDoador.getRawValue() as NewUserDoador;
    this.signUpService.signUpDoador(newUser)
      .subscribe(() => {
      this.router.navigate(['']);
    }, err => console.log(err));*/
  }

}
