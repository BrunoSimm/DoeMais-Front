import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../../item/item'; 

@Component({
  selector: 'itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnChanges {

  @Input() itens: Item[] = [];
  rows: any[] = [];

  constructor() { }

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

}
