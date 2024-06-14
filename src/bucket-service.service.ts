import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FilmToAdd} from "./addFilmToBucket";
import {Observable} from "rxjs";
import {BucketResponse} from "./bucketResponse";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BucketServiceService {

  private bucketsApiUrl = 'http://localhost:8080/api/buckets';

  addFilmToBucket(id: number | undefined): void{
    const url = `${this.bucketsApiUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var data = new FilmToAdd(<number>id);
    console.log(data)
    this.http.post<FilmToAdd>(url, data, httpOptions).subscribe(
      response => {
        console.log('Request successful', response);
      },
      error => {
        console.error('Request failed', error);
      }
    );
  }


  getBuckets(): Observable<BucketResponse> {
    return this.http.get<BucketResponse>(this.bucketsApiUrl);
  }

  deleteBucket(id: number) {
    console.log("delete cart")
    const url = `${this.bucketsApiUrl}/${id}`;
    return this.http.delete<void>(url, httpOptions).subscribe(
      response => {
        console.log('Request successful', response);
      },
      error => {
        console.error('Request failed', error);
      }
    );
  }

  constructor(private http: HttpClient) { }

}
