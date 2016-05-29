import { Component, OnInit } from '@angular/core';

import { Developer } from './developer';
import { DeveloperDetailComponent } from './developer-detail.component';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}} by {{powerBy}}</h1>
    <h2>My Team</h2>
    <ul class="developers">
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="badge">{{developer.id}}</span> {{developer.name}}
      </li>
    </ul>
    <my-developer-detail [developer]="selectedDeveloper"></my-developer-detail>
  `,
  styles: [`
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
  `],
  directives: [DeveloperDetailComponent],
  providers: [DeveloperService]
})
export class AppComponent implements OnInit {
  title = 'Developers app';
  developers: Developer[];
  selectedDeveloper: Developer;
  powerBy:'JGO';

  constructor(private developerService: DeveloperService) { }

  getDevelopers() {
    this.developerService.getDevelopers().then(developers => this.developers = developers);
  }

  ngOnInit() {
    this.getDevelopers();
  }

  onSelect(developer: Developer) { this.selectedDeveloper = developer; }
}
