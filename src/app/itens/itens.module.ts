import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ItemFormModule } from "./item-form/item-form.module";
import { ItemListModule } from "./item-list/item-list.module";
import { ItemModule } from "./item/item.module";

@NgModule({
    declarations: [
        
    ], //É acessível apenas para os componentes internos do módulo.
    //exports: [PhotoComponent, PhotoListComponent], //É acessível para componentes que importem o módulo.
    imports: [
        ItemModule,
        ItemFormModule,
        ItemListModule,
        RouterModule
    ]
})
export class ItensModule{

}