import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { ClientInfo } from 'src/typeorm/entities/ClientInfo';
import { AddClientInfoType } from 'src/utils/types';

@Injectable()
export class ClientInfoService {

  constructor(@InjectRepository(ClientInfo) private clientInfoRepo: Repository<ClientInfo>) {}

  getAllClientInfo() {
    return this.clientInfoRepo.find()
  }

  addClientInfo(clientData: AddClientInfoType) {
    const newData = this.clientInfoRepo.create(clientData)
    return this.clientInfoRepo.save(newData)
  }
}
