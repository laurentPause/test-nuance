import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = "http://localhost:3000/users/";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };
  private tokenKey = "auth-token";
  private userKey = "auth-user";

  constructor(private httpClient: HttpClient) { }

  public login(data: any): any {
    try {
      return this.httpClient.post(this.server + 'auth', data, this.httpOptions);
    } catch (error) {
      throw error;
    }
  }

  public register(data: any): Observable<any> {
    return this.httpClient.post(this.server + 'register', data, this.httpOptions);
  }
  
  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.tokenKey);
    window.sessionStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.tokenKey);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.userKey);
    window.sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.userKey);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
}
