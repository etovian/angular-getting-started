import {Injectable} from '@angular/core';
import {Person} from "./person";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  private PEOPLE_URL = 'http://localhost:8080/people';

  findById(id: string | null): Observable<Person> {
    const url = `${this.PEOPLE_URL}/${id}`;
    return this.http.get<Person>(url);
  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.PEOPLE_URL)
  }


}
