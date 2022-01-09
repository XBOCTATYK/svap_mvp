import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GrantType {
  @PrimaryGeneratedColumn('increment', { type: 'int2' })
  @Index()
  id: number;

  @Column()
  name: string;
}
