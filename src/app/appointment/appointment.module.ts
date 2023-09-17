import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { LayoutComponent } from './layout.component';
import { AppointmentComponent } from './appointment.component';
// import { UpdateComponent } from './update.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppointmentRoutingModule,
        SelectButtonModule,
        FormsModule,
        ButtonModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatCheckboxModule,
        MatDialogModule,
    ],
    declarations: [
        LayoutComponent,
        AppointmentComponent,
        // UpdateComponent
    ],
})
export class AppointmentModule { }