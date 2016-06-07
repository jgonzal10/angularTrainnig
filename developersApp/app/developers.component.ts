import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Developer } from './developer';
import { DeveloperService } from './developer.service';
import { DeveloperDetailComponent } from './developer-detail.component';


import { DeveloperDetailComponent } from './developer-detail.component';


@Component({
  selector: 'my-developers',
  templateUrl: 'app/views/developers.component.html',
  styleUrls:  ['app/styles/developers.component.css'],
  directives: [DeveloperDetailComponent]
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  selectedDeveloper: Developer;
  addingDeveloper = false;
  error: any;

  constructor(
    private router: Router,
    private developerService: DeveloperService) { }

  getDevelopers() {
    this.developerService.getDevelopers().then(developers => this.developers = developers);
  }

  ngOnInit() {
    this.getDevelopers();
  }

  onSelect(developer: Developer) { this.selectedDeveloper = developer; }

  gotoDetail() {
    this.router.navigate(['DeveloperDetail', { id: this.selectedDeveloper.id }]);
  }


  addDeveloper() {
  this.addingDeveloper = true;
  this.selectedDeveloper = null;
}

close(savedDeveloper: Developer) {
  this.addingDeveloper = false;
  if (savedDeveloper) { this.getDeveloper(); }
}

delete(developer: Developer, event: any) {
  event.stopPropagation();
  this.developerService
      .delete(developer)
      .then(res => {
        this.developers = this.developers.filter(h => h !== developer);
        if (this.selectedDeveloper === developer) { this.selectedDeveloper = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
}


}

