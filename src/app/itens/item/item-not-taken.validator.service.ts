import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";
import { ItemService } from "./item.service";

@Injectable({providedIn: 'root'})
export class ItemNotTakenValidatorService {

    constructor(private itemService: ItemService){}

    checkNameTaken(){
        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(name => {
                return this.itemService.checkNameTaken(name);
            }))
            .pipe(map(isTaken => isTaken ? {nameTaken:true} : null))
            .pipe(first());
        }
    }

}