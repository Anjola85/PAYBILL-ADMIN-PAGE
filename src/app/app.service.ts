import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { tokenKey } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  static options(token) {
    return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': '`Bearer ' + token
    });
}


post(path: string, request: any, token?: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_host}` + path, request, { headers: AppService.options(token) });
}

get(path: string, params?: any, token?: any): Observable<any> {
    if (params) {
        return this.httpClient.get(`${environment.api_host}` + path + params, { headers: AppService.options(token) });
    }
    return this.httpClient.get(`${environment.api_host}` + path, { headers: AppService.options(token) });
}

update(path: string, params: any, body: any, token: any): Observable<any> {
    return this.httpClient.put(`${environment.api_host}` + path + params, body, { headers: AppService.options(token) });
}

delete(path: string, params?: any, token?: any): Observable<any> {
    return this.httpClient.delete(`${environment.api_host}` + path + params, { headers: AppService.options(token) });
}
}
