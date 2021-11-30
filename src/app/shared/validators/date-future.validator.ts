import { AbstractControl } from "@angular/forms";

export function dateFutureValidator(control: AbstractControl){
//Valida se a data digitada é posterior ao dia atual.

    if(control.value.includes("/")){
       var d = control.value.split("/");
    }

    if(control.value.includes("-")){
       var d = control.value.split("-");
    }
    var d = control.value.split("/");
    let dateDigitada = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    const currentYear = new Date();
    if (dateDigitada < currentYear){
        return {
            dateFuture: true
        }; // Falhou na validação
    }
    return null; //Não Falhou na validação.
}