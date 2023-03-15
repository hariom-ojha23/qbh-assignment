import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'Client_info'})
export class ClientInfo {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string
}