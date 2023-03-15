import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { ClientInfo } from 'src/typeorm/entities/ClientInfo';
import { AddClientInfoType } from 'src/utils/types';

const PDFDocument = require("pdfkit-table")

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

  async generatePDF(): Promise<Buffer> {
    const clientList = await this.clientInfoRepo.find()
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      let doc = new PDFDocument({ margin: 30, size: 'A4', bufferPages: true })

      // todo
      const table = {
        title: {label: "Client Info", fontSize: 14,},
        headers: [
          { label: "Id", property: 'id', width: 80, valign: 'center', align: "left", padding: 12, headerColor:"#2196f3", headerOpacity:0.5 },
          { label: "Name", property: 'name', width: 100, valign: 'center', align: "right", padding: 12, headerColor:"#2196f3", headerOpacity:0.5  }, 
          { label: "Email Address", property: 'email', width: 200, valign: 'center', align: "right", padding: 12, headerColor:"#2196f3", headerOpacity:0.5  }, 
          { label: "Phone Number", property: 'phone', width: 150, valign: 'center', align: "right", padding: 12, headerColor:"#2196f3", headerOpacity:0.5  }, 
        ],
        datas: clientList,
      };


      doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(12),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica").fontSize(11);
          indexColumn === -1 && doc.addBackground(rectRow, '#f5f5f5', 1);
        },
      });


      let buffer = []
      doc.on('data', buffer.push.bind(buffer))
      doc.on('end', () => {
        const data = Buffer.concat(buffer)
        resolve(data)
      })
      doc.end()
    })

    return pdfBuffer
  }
}
