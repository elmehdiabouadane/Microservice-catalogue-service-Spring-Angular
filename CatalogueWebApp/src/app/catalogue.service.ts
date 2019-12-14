import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getAllCategories() {
    return this.http.get(this.host + '/categories');
  }

  getRessource(url) {
    return this.http.get(url);
  }

  deleteRessource(url) {
    const headers = new HttpHeaders({'authorization':'Bearer '+this.authenticationService.jwt});
    return this.http.delete(url, {headers: headers});
  }

  postRessource(url, data) {
    const headers = new HttpHeaders({'authorization':'Bearer '+this.authenticationService.jwt});
    return this.http.post(url, data, {headers: headers});
  }

  putRessource(url, data) {
    const headers = new HttpHeaders({'authorization':'Bearer '+this.authenticationService.jwt});
    return this.http.put(url, data, {headers: headers});
  }

  patchRessource(url, data) {
    const headers = new HttpHeaders({'authorization':'Bearer '+this.authenticationService.jwt});
    return this.http.patch(url, data, {headers: headers});
  }
}
