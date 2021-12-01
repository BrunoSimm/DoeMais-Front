import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Item } from '../item/item';
import { ItemService } from '../item/item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemListResolver implements Resolve<Observable<Item[]>> {

  constructor(private service: ItemService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]>{
    return this.service.listItensPaginated(0);
  }
}
