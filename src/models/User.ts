import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Index(['phone', 'password'], { unique: true })
export class User {
  @Index({ unique: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 20 })
  @Index({ unique: true })
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isBlocked: boolean;

  @Column()
  isAccepted: boolean;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateDate: Date;
}
