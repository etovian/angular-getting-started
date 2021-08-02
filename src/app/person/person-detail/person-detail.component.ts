import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../person";
import {ActivatedRoute} from "@angular/router";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input()
  person?: Person;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.findById(id).subscribe({
      next: person => this.person = person,
      error: (e) => console.log(e)
    });
  }

}
