import { Injectable } from '@angular/core';
import { State, AppointmentSlots } from '@app/_models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,from, of } from 'rxjs';
import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}/appointment`;

import {
  map
} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public states: Observable<State>;
  public appointmentslots: Observable<AppointmentSlots>;
  private appointmentslotsdata: any;

  constructor(
        private http: HttpClient
  ) { 
   this.appointmentslotsdata = [
      {"id":"1", "appointmentlocationId": "LODI", "earliestavailabledate": "2023-09-05", "dateforslots": ""},
      {"id":"2", "appointmentlocationId": "NEWARK", "earliestavailabledate": "2023-06-05", "dateforslots": ""},
      {"id":"3", "appointmentlocationId": "Rahway", "earliestavailabledate": "2023-07-05", "dateforslots": ""},
      {"id":"4", "appointmentlocationId": "Bayone", "earliestavailabledate": "2023-05-28", "dateforslots": ""}
    ];
  
  }
  
  getAllState() {
    return this.http.get<State[]>(`${baseUrl}/states`);
}

getAllAppointmentTypes(id: string) {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("stateId",id);
  return this.http.get<State[]>(`${baseUrl}/appointmenttypes`, {params:queryParams});
}

getAllAppointmentLocations(id: string) {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("apptypeid",id);
  return this.http.get<State[]>(`${baseUrl}/appointmentlocations`, {params:queryParams});
}

update(appintemets: AppointmentSlots) {
  return this.http.post(`${baseUrl}/update`, appintemets);
}

getAppointmentSlots(): Observable<AppointmentSlots[]> {
  
  // this.appointmentslots = of(this.appointmentslotsdata);
  
  // return this.appointmentslots;

  let queryParams = new HttpParams();
  queryParams = queryParams.append("accountid","1");
  queryParams = queryParams.append("apptype","1");

  return this.http
      .get(`${baseUrl}/appointmentslots`,{params: queryParams})
      .pipe<AppointmentSlots[]>(map((data: any) => data.appointmentLocations.dmvLocation));

  // return this.http
  //     .get(`${baseUrl}/appointmentslots`,{params: queryParams})
  //     .pipe(map(data => 
  //       { 
  //         return data.json().results.map(item =>{
  //           return new AppointmentSlots(
  //               item.id,
  //               item.appointmentlocationId,
  //       )
  //     })
  //     })
  //     );
  
}

updateUser(aslot: AppointmentSlots): Observable<AppointmentSlots> {
  return this.http.patch<AppointmentSlots>(`${baseUrl}/${aslot.id}`, aslot);
}


}
