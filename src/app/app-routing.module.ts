import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';


const routes: Routes = [
  {path : '', redirectTo:'/home' , pathMatch: "full"},
  {path : 'home',component:HomeComponent},
  {path:'main',component:MainComponent},
  {path: '**',redirectTo:'/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
