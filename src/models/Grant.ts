import {
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { GrantType } from './GrantType';

@Entity()
export class Grant {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @Index()
  id: number;

  @OneToOne(() => GrantType)
  @JoinColumn()
  type: GrantType;

  @ManyToOne(() => User)
  @Index({ unique: true })
  @JoinColumn()
  account: User;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
