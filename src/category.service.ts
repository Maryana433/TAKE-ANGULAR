import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private studentsApiUrl = 'http://localhost:8080/api/films/categories';

  constructor(private http: HttpClient) { }


  getCategories(): Observable<String[]> {
    return this.http.get<String[]>(this.studentsApiUrl)
  }
}
