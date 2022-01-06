import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortDescription: string;

  @Column()
  description: string;

  @Column()
  icon: string;
}
