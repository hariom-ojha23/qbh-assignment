import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientInfo } from './typeorm/entities/ClientInfo';
import { ClientInfoModule } from './client_info/client_info.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'qbh',
    username: 'root',
    password: 'HariomOjha#23',
    synchronize: false,
    entities: [ClientInfo]
  }), ClientInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
