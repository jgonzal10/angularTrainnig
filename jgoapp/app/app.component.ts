import { Component } from '@angular/core';
export class Developer {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My developers</h2>
    <ul class="developers">
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="badge">{{developer.id}}</span> {{developer.name}}
      </li>
    </ul>
    <div *ngIf="selectedDeveloper">
      <h2>{{selectedDeveloper.name}} details!</h2>
      <div><label>id: </label>{{selectedDeveloper.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedDeveloper.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .developers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .developers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .developers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .developers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .developers .text {
      position: relative;
      top: -3px;
    }
    .developers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent { 
  title = 'Angular2 trainnig';
  developers = DEVELOPERS;
  selectedDeveloper: Developer;
  onSelect(developer: Developer) { this.selectedDeveloper = developer; }

}

var DEVELOPERS: Developer[] = [
{ "id": 10, "name": "JGO" },
  { "id": 11, "name": "M" },
  { "id": 12, "name": "N" },
  { "id": 13, "name": "B" },
  { "id": 14, "name": "Cas" },
  { "id": 15, "name": "Mta" },
  { "id": 16, "name": "RrMan" },
  { "id": 17, "name": "Dma" },
  { "id": 18, "name": "DQ" },
  { "id": 19, "name": "Ma" },
  { "id": 20, "name": "Tdo" }
];
