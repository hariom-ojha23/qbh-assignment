import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddClientInfoDto } from 'src/client_info/dtos/addClientInfo.dto';
import { ClientInfoService } from 'src/client_info/services/client_info/client_info.service';

@Controller('client-info')
export class ClientInfoController {

  constructor(private clientInfoService: ClientInfoService) {}
  
  @Get()
  getAllClientInfo() {
    return this.clientInfoService.getAllClientInfo()
  }

  @Post()
  addClientInfo(@Body() clientData: AddClientInfoDto) {
    return this.clientInfoService.addClientInfo(clientData)
  }
}
