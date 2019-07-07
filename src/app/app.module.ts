import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './Services/http.service';
import {DetailsComponent} from './details/details.component';
import {TableComponent} from './table/table.component';

import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {PaginatorPipe} from './Shared/pipes/paginator.pipe';
import {OrderModule} from 'ngx-order-pipe';
import {FilterPipe} from './Shared/pipes/filter.pipe';

//npm install ngx-order-pipe --save

@NgModule({
  declarations: [
    AppComponent, DetailsComponent, TableComponent, PaginatorPipe,FilterPipe
  ],
  imports: [BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule, MatProgressBarModule,
    BrowserModule,
    AppRoutingModule, MatSnackBarModule, OrderModule,
    MatSortModule,
    MatTableModule, HttpClientModule,
    MatPaginatorModule, MatProgressSpinnerModule, MatCheckboxModule, ReactiveFormsModule, MatDatepickerModule, MatMomentDateModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
