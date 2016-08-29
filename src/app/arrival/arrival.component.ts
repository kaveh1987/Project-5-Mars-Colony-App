import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colonist } from '../shared/models';
import { Occupation } from '../shared/models';
import ColonistService from '../shared/services/colonist.service'
import OccupationService from '../shared/services/occupation.service';


@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent {
  NO_OCCUPATION_SELECTED = '(none)';
  public SERVER_ERROR: string;
public occupations: Occupation[];
public colonist: Colonist;

  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
  ) {
    this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
    occupationService.getOccupations().then(jobs => this.occupations = jobs);
   }
   onSubmit(){
       this.colonistService
           .newColonist(this.colonist)
           .then(colonist => {
               this.router.navigate(['/encounters']);
           })
           .catch(error => {
             this.SERVER_ERROR = 'there was an error processing the colonist.';

           });
   }
  get noOccupation(){
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }

}
