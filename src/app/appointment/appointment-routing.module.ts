import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { AppointmentComponent } from './appointment.component';

// import { UpdateComponent } from './update.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
             { path: 'slots', component: AppointmentComponent },
            //  { path: 'select', component: SelectButtonMultipleDemo }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentRoutingModule { }