import { Developer } from './developer';
import { DEVELOPERS } from './mock-developers';
import { Injectable } from '@angular/core';

@Injectable()
export class DeveloperService {
  getDevelopers() {
    return Promise.resolve(DEVELOPERS);
  }

  // See the "Take it slow" appendix
  getDevelopersSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }

  getDeveloper(id: number) {
    return this.getDevelopers()
               .then(developers => developers.filter(developer => developer.id === id)[0]);
  }
}

