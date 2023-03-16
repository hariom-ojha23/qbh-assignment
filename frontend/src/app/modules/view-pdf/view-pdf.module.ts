import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewPdfComponent } from './view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [{ path: '', component: ViewPdfComponent }]

@NgModule({
  declarations: [ViewPdfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PdfViewerModule
  ]
})
export class ViewPdfModule { }
