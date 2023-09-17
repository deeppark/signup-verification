import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

 import { AppointmentService, AlertService } from '@app/_services';
// import { MustMatch } from '@app/_helpers';
import {AppointmentSlots, TableColumns} from '../_models/appointmentslots';



@Component({ templateUrl: 'appointment.component copy.html' })
export class AppointmentComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    states: any[];
    appointmentTypes: any[];
    appointmentLocations: any[];

    displayedColumns: string[] = TableColumns.map((col) => col.key)
    columnsSchema: any = TableColumns
    dataSource = new MatTableDataSource<AppointmentSlots>()
   
    
    valid: any = {}

    value: any;


    paymentOptions: any[] = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
  ];
  

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        // private accountService: AccountService,
        private alertService: AlertService,
        private appointmentService: AppointmentService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            stateId: ['', Validators.required],
            appointmenttypeId: ['', Validators.required],
            appointmentlocationId: ['', Validators.required]
        });
        
        this.appointmentService.getAllState()
            .pipe(first())
            .subscribe(states => this.states = states);

        this.appointmentService.getAllAppointmentTypes("1")
            .pipe(first())
            .subscribe(appointmentTypes => this.appointmentTypes = appointmentTypes);
        
        this.appointmentService.getAllAppointmentLocations("1")
            .pipe(first())
            .subscribe(appointmentLocations => this.appointmentLocations = appointmentLocations);

        this.appointmentService.getAppointmentSlots().subscribe((res: any) => {
              this.dataSource.data = res
            })
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.appointmentService.update(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
    isAllSelected() {
        return this.dataSource.data.every((item) => item.isSelected)
      }
    
      isAnySelected() {
        return this.dataSource.data.some((item) => item.isSelected)
      }
    
      selectAll(event: any) {
        this.dataSource.data = this.dataSource.data.map((item) => ({
          ...item,
          isSelected: event.checked,
        }))
      }

      removeRow(id: string) {
        // this.userService.deleteUser(id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (u: AppointmentSlots) => u.id !== id,
          );
      }

      editRow(row: AppointmentSlots) {
        this.appointmentService.updateUser(row).subscribe(() => (row.isEdit = false))
      }
      
}