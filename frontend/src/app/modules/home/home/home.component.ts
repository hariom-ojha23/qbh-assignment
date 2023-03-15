import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private homeService: HomeService) {}

  generatePdf() {
    this.homeService.generatePdf().subscribe((res) => {
      const blob = new Blob([res], {type: 'application/pdf'})

      const linkElement = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      linkElement.setAttribute('href', url);
      linkElement.setAttribute('download', 'clientinfo.pdf');

      linkElement.click();
    })
  }
}
