import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-nameplate',
  templateUrl: './nameplate.component.html',
  styleUrls: ['./nameplate.component.css']
})
export class NameplateComponent implements OnInit {

  @Input()
  person?: Person;

  @Output()
  onPersonSelected = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onPersonSelected.emit(this.person);
  }
}
