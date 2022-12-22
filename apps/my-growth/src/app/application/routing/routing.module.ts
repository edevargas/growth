import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '',  loadComponent: () => import('../../pages/home/home.component').then( m => m.HomeComponent) },
  { path: '**', redirectTo: '/' },
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
