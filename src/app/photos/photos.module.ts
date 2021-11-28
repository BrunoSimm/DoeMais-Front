import { NgModule } from "@angular/core";

import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";

@NgModule({
    declarations: [
        
    ], //É acessível apenas para os componentes internos do módulo.
    //exports: [PhotoComponent, PhotoListComponent], //É acessível para componentes que importem o módulo.
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
    ]
})
export class PhotosModule{

}