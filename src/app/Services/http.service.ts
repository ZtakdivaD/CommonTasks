import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataExchangeService} from './data-exchange.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlC = 'https://bolt-flight-api.herokuapp.com/api/countriesToFlight';
  urlC1 = 'https://bolt-flight-api.herokuapp.com/api/availableFlightByCountry';
  urlC2 = 'https://bolt-flight-api.herokuapp.com/api/ToggleSelectedFlight';
  url = 'https://upstartt3.herokuapp.com/';


  urlContacts = '/contact';

  constructor(private http: HttpClient) {
  }


  addContact(body): Observable<object> {
    return this.http.post(this.url + this.urlContacts, body);
  }

  editContact(body): Observable<object> {
    return this.http.put(this.url + this.urlContacts, body);
  }

  deleteContact(id): Observable<object> {
    return this.http.delete(this.url + this.urlContacts + '/' + id);
  }


  getAllContacts(): Observable<void> {
    return this.http.get(this.url + '/all')
      .pipe(map((res) => {
        DataExchangeService.setContacts((res as any));
        console.log(res);

      }));
  }

  getAll() {
    return this.http.get(this.url + '/all')
      .pipe(map((res) => res));
  }

  getAllCountries() {
    return this.http.get(this.urlC).pipe(map((res) => res));
  }

  getCountryInf(id) {
    return this.http.get(this.urlC1 + '/' + id).pipe(map((res) => res));
  }

  chooseCountry(data) {
    return this.http.post(this.urlC2, data).pipe(map((res) => res));
  }
}


