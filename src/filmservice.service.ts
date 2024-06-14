import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./film";
import {FilmDetails} from "./filmDetails";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private filmsApiUrl = 'http://localhost:8080/api/films';

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsApiUrl)
  }

  getFilmDetails(id: number): Observable<FilmDetails> {
    const url = `${this.filmsApiUrl}/${id}`;
    return this.http.get<FilmDetails>(url);
  }

}
