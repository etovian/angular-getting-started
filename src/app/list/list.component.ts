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
    this.people = [];
  }

}
