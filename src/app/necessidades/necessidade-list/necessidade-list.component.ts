import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Necessidade } from '../necessidade/necessidade';
import { NecessidadeService } from '../necessidade/necessidade.service';


@Component({
  selector: 'necessidade-list',
  templateUrl: './necessidade-list.component.html',
  styleUrls: ['./necessidade-list.component.scss']
})
export class NecessidadeListComponent implements OnInit {

  necessidades: Necessidade[] = [];
  filter: string = '';
 
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private necessidadeService: NecessidadeService){ }
  
  ngOnInit(): void {
    //this.necessidades = this.activatedRoute.snapshot.data.necessidades; // TODO -> REQUISIÇÃO BACK-END PAGINADO
    this.necessidades = environment.necessidades_fake;
  }

  ngOnDestroy(): void {
  }

  load() {
    this.necessidadeService
        .listNecessidadesPaginated(++this.currentPage)
        .subscribe(necessidades => {
            this.filter = '';
            this.necessidades = this.necessidades.concat(necessidades);
            if(!necessidades.length) this.hasMore = false;
        });
  }

}
