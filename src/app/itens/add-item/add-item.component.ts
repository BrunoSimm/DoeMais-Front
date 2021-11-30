import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
  itemExistsError: boolean = false;

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
          //this.itemNotTakenService.checkNameTaken()
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

    let result;
    let exists;
    //Validar se Item já existe.
    result = this.itensService.checkNameTaken(item.name);

    if (result !== null) {
      result.subscribe(
        (response: any) => {
          exists = response.exists;
          if(exists == true){
            //error - Existe um Item com o nome escolhido.
            this.itemExistsError = true;
          } else {
            this.itemExistsError = false;
            this.itensService.addItem(item).subscribe(() => {
              this.router.navigate(['/itens'])
            }, err => this.router.navigate(['/itens']) );
          }
        },
        (error) => {this.router.navigate(['/itens'])}
      );
    }
  }

}
