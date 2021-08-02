import {Component, OnInit} from '@angular/core';
import {Person} from "../person/person";
import {PeopleService} from "../person/people.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'mjg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];
  subscription?: Subscription;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.subscription = this.peopleService.getPeople().subscribe({
      next: people => this.handleGetPeopleResponse(people),
      error: ex => console.log(ex)
    });
  }

  handleGetPeopleResponse(people: Person[]): void {
    this.people = people;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  personSelected(person: Person): void {
    console.log(`${person.firstName} ${ person.lastName } (${person.id}) was selected`);
  }
}
