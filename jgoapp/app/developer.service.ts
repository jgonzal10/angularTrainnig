import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { DEVELOPERS } from './mock-developers';
@Injectable()
export class DeveloperService {
	getDevelopers(){
		return Promise.resolve(DEVELOPERS);

	}

	getHeroesSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }
}