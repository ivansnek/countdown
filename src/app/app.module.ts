import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateBoxComponent } from './date-box/date-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CountdownService } from './shared/services/countdown.service';


@NgModule({
  declarations: [
    AppComponent,
    DateBoxComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CountdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
