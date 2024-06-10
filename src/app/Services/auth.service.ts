import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials } from '../Model/credentials';
import { API_CONFIG } from '../Config/api-config';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credentials) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds);
  }

  successfulLogin(authToken: string, email: string) {
    localStorage.setItem('token', authToken)
    localStorage.setItem('email', email)
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }

}
