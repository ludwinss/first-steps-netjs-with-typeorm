import { LoginEntity } from './login.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
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