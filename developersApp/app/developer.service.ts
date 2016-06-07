import { Developer } from './developer';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DeveloperService {

//private developersUrl = 'http://api.androidhive.info/contacts/';
private developersUrl = 'http://201.24.26.23/wsrest/api/Seguranca/ConsultaModulos';

constructor(private http: Http) { }

getDevelopers(): Promise<Developer[]> {
    return this.http.get(this.developersUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
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

  private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

// Add new Developer
private post(developer: Developer): Promise<Developer> {
  let headers = new Headers({
    'Content-Type': 'application/json'});

  return this.http
             .post(this.developersUrl, JSON.stringify(developer), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
}

// Update existing Developer
private put(developer: Developer) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.developersUrl}/${developer.id}`;

  return this.http
             .put(url, JSON.stringify(developer), {headers: headers})
             .toPromise()
             .then(() => developer)
             .catch(this.handleError);
}

delete(developer: Developer) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.developersUrl}/${developer.id}`;

  return this.http
             .delete(url, headers)
             .toPromise()
             .catch(this.handleError);
}

//saving the developer
save(developer: Developer): Promise<Developer>  {
  if (developer.id) {
    return this.put(developer);
  }
  return this.post(developer);
}


}

