import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Item } from '../item/item';
import { ItemService } from '../item/item.service'; 

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itens: Item[] = [];
  filter: string = '';
 
  hasMore: boolean = true;
  currentPage: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService){ }
  
  ngOnInit(): void {
    this.itens = this.activatedRoute.snapshot.data.itens; // TODO -> REQUISIÇÃO BACK-END PAGINADO
    console.log(this.itens);
    //this.itens = environment.itens_fake;
  }

  ngOnDestroy(): void {
  }

  load() {
    this.itemService
        .listItensPaginated(++this.currentPage)
        .subscribe(itens => {
            this.filter = '';
            this.itens = this.itens.concat(itens);
            if(!itens.length) this.hasMore = false;
        });
  }

}
