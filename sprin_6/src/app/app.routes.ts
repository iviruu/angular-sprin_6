import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

export const routes: Routes = [
    {path:'presupuesto/:id', component: PresupuestoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}