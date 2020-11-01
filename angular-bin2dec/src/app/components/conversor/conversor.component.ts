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

    private _isdark = false;

    constructor(
        private _conversorService: ConversorService,
        private _notificationService: NotificationService
    ) { }

    public darkMode(): void {
        const html = document.querySelector('html');
        html.classList.toggle('dark-mode');
        this._isdark = !this._isdark;
    }

    public get iconName(): string {
        return this._isdark === true ? 'toggle_on' : 'toggle_off';
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
