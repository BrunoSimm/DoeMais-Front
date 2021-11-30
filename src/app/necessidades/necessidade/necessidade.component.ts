import { Component, Input } from "@angular/core";

@Component({
    selector: "ap-necessidade",
    templateUrl: "./necessidade.component.html"
})
export class NecessidadeComponent {
    @Input()  description= '';
    @Input()  url= '';
}