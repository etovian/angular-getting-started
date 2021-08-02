import {Component, OnInit} from '@angular/core';
import {Person} from "../person/person";
import {PeopleService} from "../person/people.service";

@Component({
  selector: 'mjg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

  personSelected(person: Person): void {
    console.log(`${person.firstName} ${ person.lastName } was selected`);
  }
}
