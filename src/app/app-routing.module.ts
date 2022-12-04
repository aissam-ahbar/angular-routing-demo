import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
];

@NgModule({
  // Creates and configures a module with all the router providers and directives.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
