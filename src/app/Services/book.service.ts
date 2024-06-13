import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../Config/api-config';
import { Book } from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = `${API_CONFIG.baseUrl}/books`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

}
