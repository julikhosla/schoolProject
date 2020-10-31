import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolClassGradeComponent } from './components/school-classgrade/school-classgrade.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: SchoolClassGradeComponent
  },
  {
    path: '**', component: SchoolClassGradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
