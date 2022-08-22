import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./entity/admin.entity";
import { LoginEntity } from "./entity/login.entity";
import { UserEntity } from "./entity/user.entity";
import { AdminService } from "./service/admin.service";
import { UserService } from "./service/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, LoginEntity, AdminEntity])],
    providers: [UserService, AdminService],
    exports: [UserService, AdminService]
})
export class UserModule { }