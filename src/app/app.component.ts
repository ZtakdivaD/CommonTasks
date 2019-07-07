import {Component, OnInit} from '@angular/core';
import {HttpService} from './Services/http.service';
import {CountryToFlyModel} from './Shared/Models/CountryToFly.model';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentField = 'no.';
  searchingText = '';
  paginatorPageIndex = 0;
  paginatorPageSize = 9;
  countriesInf: CountryToFlyModel [] = [];
  countries = [];
  countryKeys = [];
  result;
  flag = 'id';
  tmp = false;

  ngOnInit(): void {
    this.getAllCountries();
  }

  constructor(private http: HttpService,
              private orderPipe: OrderPipe
  ) {
  }


  getAllCountries() {
    this.http.getAllCountries().subscribe((res: any) => {
      this.countries = res;
      console.log(this.countries);
    }, (error) => {
      console.log(error);
    });
  }

  getCountryInf(id) {
    this.http.getCountryInf(id).subscribe((res: CountryToFlyModel[]) => {
      this.countriesInf = res;
      this.countryKeys = Object.keys(res[0]);
      console.log(this.countriesInf);
    }, (error) => {
      console.log(error);
    });
  }

  uploadTable(event) {
    console.log(event);
    this.paginatorPageIndex = event.pageIndex;
    this.paginatorPageSize = event.pageSize;
  }

  sort(field) {
    if (this.flag === field && this.tmp === false) {
      this.countriesInf = this.orderPipe.transform(this.countriesInf, field, false, true, (a, b) => {
        return a < b ? 1 : -1;
      });
      this.tmp = true;

      return;
    }

    if (this.flag !== field) {
      this.flag = field;
      this.countriesInf = this.orderPipe.transform(this.countriesInf, field, false, true, (a, b) => {
        return a > b ? 1 : -1;
      });
      this.tmp = true;

      return;
    }


    if (this.flag === field && this.tmp === true) {
      this.countriesInf = this.orderPipe.transform(this.countriesInf, field, false, true, (a, b) => {
        return a > b ? 1 : -1;
      });
      this.tmp = false;

      return;

    }


    console.log(this.countriesInf);


  }

  toDo(data) {
    var check = confirm('Вы уверены?');
    alert(check);
    this.http.chooseCountry(data).subscribe((res) => {

      console.log(res);
      this.refresh();
    }, (error) => {
      console.log(error);
    });

  }
  refresh(): void {
    window.location.reload();
  }
  searchField(field: string) {
    this.currentField = field;
  }
}
