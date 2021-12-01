import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item/item';

@Pipe({ name: 'filterByName'})
export class FilterByName implements PipeTransform {
  
    transform(itens: Item[], nameQuery: string) {
        
        nameQuery = nameQuery
            .trim()
            .toLowerCase();

        if(nameQuery) {
            return itens.filter(item =>
                item.nome.toLowerCase().includes(nameQuery)
            );
        } else {
            return itens;
        }
    }
}