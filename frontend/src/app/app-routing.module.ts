import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/modules/home/home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'view-pdf',
    loadChildren: () =>
      import('src/app/modules/view-pdf/view-pdf.module').then(
        (m) => m.ViewPdfModule,
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
