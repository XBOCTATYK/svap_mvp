import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  @Index('session_id_i', { unique: true })
  id: string;

  @Column({ unique: true })
  userId: string;

  @Column()
  expireDate: Date;
}
