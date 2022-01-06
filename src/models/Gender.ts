import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortDescription: string;

  @Column()
  description: string;
}
