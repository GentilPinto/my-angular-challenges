import {
    ViewChild,
    Component,
    ElementRef
} from '@angular/core';
import { ConversorService } from '../../services/conversor/conversor.service';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
    selector: 'app-conversor',
    templateUrl: './conversor.component.html',
    styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    @ViewChild('binaryNumberInput')
    binaryNumberInput: ElementRef;

    @ViewChild('result')
    result: ElementRef;

    private _isdark = localStorage.getItem('theme') !== null;

    constructor(
        private _conversorService: ConversorService,
        private _notificationService: NotificationService
    ) { }

    public themeToggle(): void {
        const body = document.querySelector('body');
        body.classList.toggle('theme-dark');
        if (!this._isdark) {
            localStorage.setItem('theme', 'theme-dark');
        } else {
            localStorage.removeItem('theme');
        }
        this._isdark = !this._isdark;
    }

    public get iconName(): string {
        return this._isdark === true ? 'wb_sunny' : 'bedtime';
    }

    public typeNumber(): void {
        const inputValue = this.binaryNumberInput.nativeElement.value as string;
        const validation = this._conversorService.DigitValidation(inputValue);
        validation.subscribe(
            (data: string) => {
                this.binaryNumberInput.nativeElement.value = data;
                const conversionResult = this._conversorService.conversor(data);
                this.result.nativeElement.value = conversionResult;
            },
            (error: string) => {
                this._notificationService
                    .showMessage(error);
                console.log('error : ' + error);
            }
        );
    }

    public clear(): void {
        this.binaryNumberInput.nativeElement.value = null;
        this.result.nativeElement.value = 0;
    }
}
