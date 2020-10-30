import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';

const routes: Routes = [
    {
        path: '',
        component: ConversorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
