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
export class BlockedUser {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @Index({ unique: true })
  id: number;

  @OneToOne(() => User)
  @Index({ unique: true })
  @JoinColumn()
  account: User;

  @Column()
  cause: string;

  @Column()
  comment: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
