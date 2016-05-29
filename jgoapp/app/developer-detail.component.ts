import { Component, Input } from '@angular/core';
import { Developer } from './developer';
@Component({
  selector: 'my-developer-detail',
  template:`
    <div *ngIf="developer">
      <h2>{{developer.name}} details!</h2>
      <div><label>id: </label>{{developer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="developer.name" placeholder="name"/>
      </div>
    </div>
  `,
 
})
export class DeveloperDetailComponent {
 @Input() 
  developer: Developer;

}