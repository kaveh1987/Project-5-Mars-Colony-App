import { Component } from '@angular/core';
import AlienService from './shared/services/alien.service';
import Occupation from './shared/services/occupation.service';
import Encounters from './shared/services/encounter.service';
import Colonist from './shared/services/colonist.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [AlienService, Occupation, Encounters, Colonist ]
})
export class AppComponent {
  constructor(alienService: AlienService, occupation: Occupation, encounters: Encounters, colonist: Colonist ){
    console.log(alienService, occupation, encounters, colonist);
  }
}
