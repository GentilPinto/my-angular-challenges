import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
    PreloadAllModules
} from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';

const routes: Routes = [
    {
        path: '',
        component: ConversorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
