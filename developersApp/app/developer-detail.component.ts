import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Developer } from './developer';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'my-developer-detail',
  templateUrl: 'app/views/developer-detail.component.html',
  styleUrls: ['app/styles/developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {
  developer: Developer;

  constructor(
    private developerService: DeveloperService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.developerService.getDeveloper(id)
      .then(developer => this.developer = developer);
  }

  goBack() {
    window.history.back();
  }
}

