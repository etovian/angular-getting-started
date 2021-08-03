import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NameplateComponent} from "./nameplate/nameplate.component";
import {PersonDetailComponent} from "./person-detail/person-detail.component";
import {RouterModule} from "@angular/router";
import {ListComponent} from "../list/list.component";

@NgModule({
  declarations: [
    NameplateComponent,
    PersonDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'people', component: ListComponent },
      { path: 'person/:id', component: PersonDetailComponent }
    ])
  ]
})
export class PeopleModule { }
