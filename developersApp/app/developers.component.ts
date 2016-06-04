import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Developer } from './developer';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'my-developers',
  templateUrl: 'app/views/developers.component.html',
  styleUrls:  ['app/styles/developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  selectedDeveloper: Developer;

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
}

