import { Pipe, PipeTransform } from '@angular/core';
import { Necessidade } from '../necessidade/necessidade';

@Pipe({ name: 'filterByName'})
export class FilterByName implements PipeTransform {
  
    transform(necessidades: Necessidade[], nameQuery: string) {
        
        nameQuery = nameQuery
            .trim()
            .toLowerCase();

        if(nameQuery) {
            return necessidades.filter(item =>
                item.name.toLowerCase().includes(nameQuery)
            );
        } else {
            return necessidades;
        }
    }
}