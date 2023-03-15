import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientInfoInterface } from 'src/app/modules/shared/interfaces/ClientInfo';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.css']
})
export class HomeTableComponent implements AfterViewInit {

  constructor(private homeService: HomeService) {}

  clientInfoList: ClientInfoInterface[] = []

  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = new MatTableDataSource<ClientInfoInterface>(this.clientInfoList);

  @ViewChild(MatPaginator) paginator:any =  MatPaginator;

  getAllClientInfo() {
    this.homeService.getAllClientinfo().subscribe((res) => {
      this.dataSource.data = res
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllClientInfo()

    console.log(this.dataSource)
  }
}
