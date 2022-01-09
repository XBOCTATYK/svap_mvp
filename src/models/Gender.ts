import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn('increment', { type: 'int2' })
  @Index({ unique: true })
  id: number;

  @Column()
  shortDescription: string;

  @Column()
  description: string;
}
