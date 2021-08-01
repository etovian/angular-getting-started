import {Injectable} from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Person[] {
    return [
      {
        firstName: 'Amy',
        lastName: 'Green'
      },
      {
        firstName: 'Jillian',
        lastName: 'Green'
      },
      {
        firstName: 'Juliette',
        lastName: 'Green'
      },
      {
        firstName: 'Mike',
        lastName: 'Green'
      },
      {
        firstName: 'John',
        lastName: 'Lamulle'
      },
      {
        firstName: 'Jacob',
        lastName: 'Lamulle'
      },
      {
        firstName: 'Cecilia',
        lastName: 'Lamulle'
      },
      {
        firstName: 'Scott',
        lastName: 'McDaniel'
      },
      {
        firstName: 'Benjamin',
        lastName: 'McDaniel'
      },
      {
        firstName: 'Edina',
        lastName: 'Bakos'
      }
    ];
  }
}
