import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Necessidade } from '../../necessidade/necessidade';

@Component({
  selector: 'necessidades',
  templateUrl: './necessidades.component.html',
  styleUrls: ['./necessidades.component.scss']
})
export class NecessidadesComponent implements OnChanges {

  @Input() necessidades: Necessidade[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.necessidades){
      this.rows = this.groupColumns(this.necessidades);
    }
  }

  groupColumns(necessidades: Necessidade[]): any[] {
    const newRows: any[] = [];
    for(let index = 0; index < necessidades.length; index+=3) {
      newRows.push(necessidades.slice(index, index + 3));
    }
    return newRows;
  }

}
