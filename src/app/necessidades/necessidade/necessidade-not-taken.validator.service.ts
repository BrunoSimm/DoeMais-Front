import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";
import { NecessidadeService } from "./necessidade.service";

@Injectable({providedIn: 'root'})
export class NecessidadeNotTakenValidatorService {

    constructor(private necessidadeService: NecessidadeService){}

    checkNameTaken(){
        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(itemId => {
                return this.necessidadeService.checkNecessidadeTaken(itemId);
            }))
            .pipe(map(isTaken => isTaken ? {itemTaken:true} : null))
            .pipe(first());
        }
    }

}