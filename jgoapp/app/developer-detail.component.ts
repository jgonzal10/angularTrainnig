import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Developer }        from './developer';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'my-developer-detail',
  templateUrl: 'app/views/developer-detail.component.html',
  styleUrls: ['app/styles/developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {
  @Input() developer: Developer;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private developerService: DeveloperService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.developerService.getDeveloper(id)
          .then(developer => this.developer = developer);
    } else {
      this.navigated = false;
      this.developer = new Developer();
    }
  }
  save() {
    this.developerService
        .save(this.developer)
        .then(developer => {
          this.developer = developer; // saved developer, w/ id if new
          this.goBack(developer);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedDeveloper: Developer = null) {
    this.close.emit(savedDeveloper);
    if (this.navigated) { window.history.back(); }
  }
}


