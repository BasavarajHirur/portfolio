import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/utils/constant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(BASE_URL + '/profile/view').pipe(
      map((res: any) => {
        try {
          return res.data
        } catch (error) {
          return error
        }
      })
    )
  }
}
