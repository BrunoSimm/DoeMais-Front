import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AddNecessidadeComponent } from "./add-necessidade/add-necessidade.component";
import { CardModule } from "../shared/components/card/card.module";
import { ItemModule } from "../itens/item/item.module";
import { ItensModule } from "../itens/itens.module";

@NgModule({
    declarations: [
        
    
    AddNecessidadeComponent
  ], //É acessível apenas para os componentes internos do módulo.
    //exports: [PhotoComponent, PhotoListComponent], //É acessível para componentes que importem o módulo.
    imports: [
      CommonModule,
      RouterModule,
      VmessageModule,
      FormsModule,
      ReactiveFormsModule,
      CardModule,
      ItemModule,
      ItensModule
    ]
})
export class NecessidadesModule{

}