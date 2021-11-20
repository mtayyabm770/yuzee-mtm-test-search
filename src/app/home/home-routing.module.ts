import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SearchPage } from './search/search.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'search',
    component: SearchPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
