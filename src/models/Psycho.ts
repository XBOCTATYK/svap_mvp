import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Psycho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
}
