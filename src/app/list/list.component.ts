import {Component, OnInit} from '@angular/core';
import {Person} from "../person/person";

@Component({
  selector: 'mjg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    this.people = this.getPeople();
  }

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

  personSelected(person: Person): void {
    console.log(`${person.firstName} ${ person.lastName } was selected`);
  }
}
