import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn('uuid', {})
  @Index({ unique: true })
  id: string;

  @Column({ comment: 'Value of token' })
  token: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createDate: Date;
}
