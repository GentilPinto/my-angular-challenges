import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ConversorService } from '../../services/conversor/conversor.service';

@Component({
    selector: 'app-conversor',
    templateUrl: './conversor.component.html',
    styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    public form = new FormGroup({
        binaryNumberInput: new FormControl(
            '',
            [
                // Validators.required,
            ]
        ),
        result: new FormControl(
            '',
            []
        )
    });

    constructor(
        private _conversorService: ConversorService
    ) { }

    public get binaryNumberInput(): AbstractControl {
        return this.form.get('binaryNumberInput');
    }

    public get result(): AbstractControl {
        return this.form.get('result');
    }

    public digit(): void {
        let inputValue = this.binaryNumberInput.value as string;
        inputValue = this._conversorService.verifyIfIsValidDigit(inputValue);
        this.binaryNumberInput.setValue(inputValue);
        this.result.setValue(
            this._conversorService.conversor(inputValue)
        );
    }

    public clear(): void {
        this.binaryNumberInput.setValue(null);
        this.result.setValue(0);
    }
}
