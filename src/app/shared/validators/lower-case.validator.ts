import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl){//Control == input do form
    if (control.value.trim() && !/^[a-z]+[0-9]*$/.test(control.value)){//Começa com letra minuscula e pode conter nums.
        return {
            lowerCase: true
        }; // Falhou na validação
    }
    return null; //Não Falhou na validação.
}