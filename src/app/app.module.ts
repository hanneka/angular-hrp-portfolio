import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent,EducationComponent,WorksComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
