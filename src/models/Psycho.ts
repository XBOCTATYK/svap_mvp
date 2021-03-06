import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Psycho {
  @PrimaryGeneratedColumn('increment')
  @Index({ unique: true })
  id: number;

  @Column()
  amount: number;

  @OneToOne(() => User)
  @Index({ unique: true })
  @JoinColumn()
  account: User;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
