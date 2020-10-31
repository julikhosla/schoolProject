import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomDetailsComponent } from './components/classroom-details/classroom-details.component';
import { SchoolClassGradeComponent } from './components/school-classgrade/school-classgrade.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolClassGradeComponent,
    ClassroomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
