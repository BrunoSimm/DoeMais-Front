import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ItemFormModule } from "./item-form/item-form.module";
import { ItemListModule } from "./item-list/item-list.module";
import { ItemModule } from "./item/item.module";
import { AddItemComponent } from './add-item/add-item.component';
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        
    
    AddItemComponent
  ], //É acessível apenas para os componentes internos do módulo.
    //exports: [PhotoComponent, PhotoListComponent], //É acessível para componentes que importem o módulo.
    imports: [
      CommonModule,
      ItemModule,
      RouterModule,
      ItemFormModule,
      ItemListModule,
      VmessageModule,
      FormsModule,
      ReactiveFormsModule,
    ]
})
export class ItensModule{

}