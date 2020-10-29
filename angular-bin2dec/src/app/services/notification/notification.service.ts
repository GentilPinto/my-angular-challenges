import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    public showMessage(message: string, type: string = 'error'): void {
        this._snackBar.open(message, 'x', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: type === 'error' ? 'msg-error' : 'msg-success'
        });
    }
}
