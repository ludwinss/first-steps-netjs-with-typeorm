import { AdminEntity } from "../../user/entity/admin.entity";
import { UserEntity } from "../../user/entity/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: true })
  description: string | null;
  @Column({ nullable: true })
  category: string | null;
  @Column({ type: 'timestamptz', default: () => 'now()' })
  created_at: string;
  @ManyToMany(() => UserEntity, { onDelete: "CASCADE" })
  @JoinTable()
  sell: UserEntity[];
  @ManyToMany(() => AdminEntity)
  @JoinTable()
  fill: UserEntity[];
}
