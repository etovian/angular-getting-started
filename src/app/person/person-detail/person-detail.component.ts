import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../person";
import {ActivatedRoute, Router} from "@angular/router";
import {PeopleService} from "../people.service";
import {HttpErrorResponse} from "@angular/common/http";

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.findById(id).subscribe({
      next: person => this.person = person,
      error: (e) => this.handleError(e)
    });
  }

  goBack(): void {
    this.router.navigate(['/people'])
  }

  handleError(error: HttpErrorResponse): void {
    console.log(error);
    this.goBack();
  }
}
