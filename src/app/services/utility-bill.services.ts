import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_PREFIX = environment.apiBaseUrl + '/v2/utility-bills';

@Injectable({ providedIn: 'root' })
export class UtilityBillService {
  constructor(private http: HttpClient) {}

  buyAirtime(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/airtime`, data);
  }

  getMobileDataProducts(): Observable<any> {
    return this.http.get(`${API_PREFIX}/data`);
  }

  buyData(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/data`, data);
  }

  buyMTNAWUF(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/awuf`, data);
  }

  buyPIN(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/pin`, data);
  }

  getBanks(): Observable<any> {
    return this.http.get(`${API_PREFIX}/banks`);
  }

  verifyBank(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/banks/verify`, data);
  }

  sendMoney(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/banks/send`, data);
  }

  getElectricityMeter(data: any): Observable<any> {
    return this.http.get(`${API_PREFIX}/electricity`, { params: data });
  }

  purchaseElectricityToken(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/electricity`, data);
  }

  purchaseExamPin(data: any): Observable<any> {
    return this.http.post(`${API_PREFIX}/examination`, data);
  }
}