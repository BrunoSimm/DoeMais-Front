import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/itens/item/item';
import { dateFutureValidator } from 'src/app/shared/validators/date-future.validator';
import { NecessidadeNotTakenValidatorService } from '../necessidade/necessidade-not-taken.validator.service';
import { NecessidadeService } from '../necessidade/necessidade.service';
import { NewNecessidade } from '../necessidade/new-necessidade';


@Component({
  selector: 'add-necessidade',
  templateUrl: './add-necessidade.component.html',
  styleUrls: ['./add-necessidade.component.scss']
})
export class AddNecessidadeComponent implements OnInit {

  necessidadeAddForm!: FormGroup;
  itemEscolhido!: Item;

  constructor(
    private formBuilder: FormBuilder, 
    private necessidadesService: NecessidadeService, 
    private necessidadeNotTakenService: NecessidadeNotTakenValidatorService,
    private router: Router
  )  { }

  ngOnInit(): void {
    this.itemEscolhido = this.necessidadesService.getBindedItem();
    this.necessidadeAddForm = this.formBuilder.group({
      expectedQuantity: ['',
        [//Validadores sincronos.
          Validators.required,
          Validators.pattern(/^[0-9]*$/)
        ],
      ],
      limitDate: ['',
        [
          Validators.required,
          Validators.pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/),
          dateFutureValidator
        ]
      ]
    });
  }

  addNecessidade(){
    const expectedQuantity = this.necessidadeAddForm.get('expectedQuantity')?.value;

    let limitDate = this.necessidadeAddForm.get('limitDate')?.value;
    limitDate = this.formatDate(limitDate);

   let newNecessidade: NewNecessidade = {
     expectedQuantity: expectedQuantity,
     limitDate: limitDate,
     currentQuantity: 0,
     status: "Active",
     idItem: this.itemEscolhido.id
   }
  
    this.necessidadesService
      .addNecessidade(newNecessidade)
      .subscribe(() => {
        this.router.navigate(['necessidades']);
      }, err => this.router.navigate(['necessidades']));
  }

  private formatDate(limitDate: string){
    if(limitDate.includes("/")){
      var d = limitDate.split("/");
    }

    if(limitDate.includes("-")){
      var d = limitDate.split("-");
    }
    var d = limitDate.split("/");
    return new Date(d[2] + '/' + d[1] + '/' + d[0]).toLocaleDateString();
  }

}
