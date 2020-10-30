import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo: 'Inicio', pathMatch:'full'},
  { path: 'Inicio' , component: HomeComponent },
  { path: 'Interação', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
