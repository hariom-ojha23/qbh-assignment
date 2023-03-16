import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HomeDialogComponent } from '../components/home-dialog/home-dialog.component'
import { HomeService } from '../services/home.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private homeService: HomeService, public dialog: MatDialog, private router: Router) {}

  pdfBlob!: Blob
  pdfUnit8Array!: Uint8Array

  generatePdf() {
    this.homeService.generatePdf().subscribe((res) => {      
      const blob = new Blob([res], {type: 'application/pdf'})
      const unit8array = new Uint8Array(res)

      const dialogRef = this.dialog.open(HomeDialogComponent)

      dialogRef.afterClosed().subscribe((result) => {
        if (result.event === 'view') {
          this.router.navigateByUrl('/view-pdf', {state: {unit8array}})
        }

        if (result.event === 'download') {
          const linkElement = document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          linkElement.setAttribute('href', url);
          linkElement.setAttribute('download', 'clientinfo.pdf');

          linkElement.click();
        }
      })

      
    })
  }
}
