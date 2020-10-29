import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
    selector: 'app-conversor',
    templateUrl: './conversor.component.html',
    styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

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

    ngOnInit(): void {
    }

    public get binaryNumberInput(): AbstractControl {
        return this.form.get('binaryNumberInput');
    }

    public get result(): AbstractControl {
        return this.form.get('result');
    }

    public digit(event: KeyboardEvent): void {
        var inputValue = this.binaryNumberInput.value as string;
        if (this._conversorService.isNotAValidDigit(event)) {
            this._conversorService.showMessage('Você inseriu um digito não binário');
            inputValue = inputValue.replace(inputValue[inputValue.length - 1], '');
            this.binaryNumberInput.setValue(inputValue);
        } else {
            this.result.setValue(
                this._conversorService.conversor(inputValue)
            );
        }
    }
}
