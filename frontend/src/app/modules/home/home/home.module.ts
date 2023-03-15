import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MaterialModule } from 'src/app/modules/shared/modules/material/material.module'

import { HomeComponent } from './home.component';
import { HomeAppbarComponent } from '../components/home-appbar/home-appbar.component';
import { HomeTableComponent } from '../components/home-table/home-table.component';
import { HomeFormComponent } from '../components/home-form/home-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [
    HomeComponent,
    HomeAppbarComponent,
    HomeTableComponent,
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
