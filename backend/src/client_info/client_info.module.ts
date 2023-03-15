import { Module } from '@nestjs/common';
import { ClientInfoController } from './controllers/client_info/client_info.controller';
import { ClientInfoService } from './services/client_info/client_info.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ClientInfo } from 'src/typeorm/entities/ClientInfo';

@Module({
  imports: [TypeOrmModule.forFeature([ClientInfo])],
  controllers: [ClientInfoController],
  providers: [ClientInfoService]
})
export class ClientInfoModule {}
