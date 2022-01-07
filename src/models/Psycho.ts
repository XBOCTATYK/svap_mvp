import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psycho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
}
