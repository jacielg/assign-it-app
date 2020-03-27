import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SectionsComponent } from './modules/sections/sections.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'sections',
      component: SectionsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
