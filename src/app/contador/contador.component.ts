import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
                <h1>{{title}}</h1>
                <h3>La base es <strong>{{base}}</strong></h3>
                <button type="button" (click)="modificarNumero(base)" [disabled]="numero >= 100">+ {{base}}</button>
                <span>{{numero}}</span>
                <button type="button" (click)="modificarNumero(-base)" [disabled]="numero <= 0">- {{base}}</button>
            `
})
export class ContadorComponent{
    title = 'contador';
    numero: number = 10;
    base: number = 5;
    modificarNumero(num: number) : void{
        this.numero += num;
    }
}