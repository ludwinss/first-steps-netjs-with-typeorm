
import { LoginEntity } from './login.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ type: 'date' })
  created_at: string;
  @OneToOne(() => LoginEntity)
  @JoinColumn()
  login: LoginEntity;
}
