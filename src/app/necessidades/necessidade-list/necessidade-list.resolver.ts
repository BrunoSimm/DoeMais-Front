import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Necessidade } from '../necessidade/necessidade';
import { NecessidadeService } from '../necessidade/necessidade.service';

@Injectable({
  providedIn: 'root'
})
export class NecessidadeListResolver implements Resolve<Observable<Necessidade[]>> {

  constructor(private service: NecessidadeService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Necessidade[]>{
    return this.service.listNecessidadesPaginated(0);
  }
}
