import { Injectable } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable({
    providedIn: 'root'
})
export class ConversorService {

    private _validKeys = ['0', '1'];

    constructor(
        private _notificationService: NotificationService
    ) { }

    public verifyIfIsValidDigit(value: string): string {
        const key = value[value.length - 1];

        if (!this._validKeys.includes(key) && value.length > 0) {
            this._notificationService
                .showMessage('Você inseriu um digito não binário');

            value = value
                .split(key)
                .join('');
        }

        return value;
    }

    public conversor(valueParam: string): string {
        const value = valueParam.split('');
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
