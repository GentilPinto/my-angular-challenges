import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class ConversorService {

    private _validKeys = ['Backspace', 'Delete', '0', '1'];

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    public showMessage(msg: string): void {
        this._snackBar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'msg-error'
        });
    }

    public isNotAValidDigit(value: KeyboardEvent): boolean {
        if (this._validKeys.includes(value.key) || value.keyCode <= 31) {
            return false;
        }
        return true;
    }

    public conversor(valueParam: any): string {
        const value = (valueParam as string).split('');
        const size = value.length;
        let idx = size - 1;
        let decimalValue = 0;

        for (let i = 0; i < size; i++) {
            decimalValue += (value[i] as unknown as number) * (2 ** idx);
            idx -= 1;
        }

        return (decimalValue as unknown as string);
    }
}
