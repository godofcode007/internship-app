import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { LoginReqModel } from './models/login-req.model';
import { LoginResModel } from './models/login-res.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.rootApi;

  constructor(private httpClient: HttpClient) { }


  login(dto: LoginReqModel): Observable<LoginResModel> {
    const networkUrl = `${this.baseUrl}auth/login`;

    return this.httpClient.post<LoginResModel>(networkUrl, dto).pipe(
      map((res: LoginResModel) => res)
    );
  }


}
