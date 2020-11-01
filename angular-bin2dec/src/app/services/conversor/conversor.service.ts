import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConversorService {

    private _validKeys = ['0', '1'];

    constructor() { }

    public DigitValidation(value: string): Observable<string> {
        const observable = new Observable<string>((observer: any) => {
            try {
                const key = value[value.length - 1];
                if (!this._validKeys.includes(key) && key != null) {
                    value = value
                        .split(key)
                        .join('');
                    observer.next(value);
                    observer.error('Você inseriu um digito não binário');
                }
                observer.next(value);
            } catch (error) {
                observer.error(error);
            }
        });
        return observable;
    }

    public conversor(valueToConvert: string): string {
        const value = valueToConvert.split('');
        const sizeValue = value.length;
        let valueIndex = sizeValue - 1;
        let decimalValue = 0;

        for (let index = 0; index < sizeValue; index++) {
            decimalValue += (value[index] as unknown as number) * (2 ** valueIndex);
            valueIndex -= 1;
        }

        return (decimalValue as unknown as string);
    }
}
