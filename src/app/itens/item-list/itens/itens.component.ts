import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NecessidadeService } from 'src/app/necessidades/necessidade/necessidade.service';
import { Item } from '../../item/item'; 

@Component({
  selector: 'itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnChanges {

  @Input() itens: Item[] = [];
  rows: any[] = [];
  itemEscolhido!: Item;
  itemTakenError: boolean = false;

  constructor(private necessidadeService: NecessidadeService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.itens){
      this.rows = this.groupColumns(this.itens);
    }
  }

  groupColumns(itens: Item[]): any[] {
    const newRows: any[] = [];
    for(let index = 0; index < itens.length; index+=3) {
      newRows.push(itens.slice(index, index + 3));
    }
    return newRows;
  }
  
  solicitarNecessidade(item: Item){
    let result;
    let exists;
    //Validar se a ONG já possui a necessidade.
    result = this.necessidadeService.verifyIfNecessidadeExists(item);

    if (result !== null) {
      result.subscribe(
        (response: any) => {
          exists = response.exists;
          if(exists == true){
            //error - Existe uma Necessidade com este item na ONG logada.
            this.itemTakenError = true;
          } else {
            this.itemTakenError = false;
            this.necessidadeService.bindItemToCreate(item);
            this.router.navigate(['necessidades', 'add'])
          }
        },
        (error) => {}
      );
    }  
  }

}
