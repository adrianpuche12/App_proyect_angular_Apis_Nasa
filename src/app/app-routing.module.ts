import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', redirectTo: 'home-component', pathMatch: 'full'},{ path: 'home-component', component: HomeComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
