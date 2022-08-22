import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('login')
export class LoginEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    login: string;
    @Column({ nullable: false })
    pwd: string;
    @Column({ default: 'U' })
    type: string;
    @BeforeInsert()
    async hasPwd() {
        this.pwd = await bcrypt.hash(this.pwd, 10)
    }
}
