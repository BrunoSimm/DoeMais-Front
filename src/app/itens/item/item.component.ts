import { Component, Input } from "@angular/core";

@Component({
    selector: "ap-item",
    templateUrl: "./item.component.html"
})
export class ItemComponent {
    @Input()  description= '';
    @Input()  url= '';
}