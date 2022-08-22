import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "src/user/entity/admin.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { AuthModule } from "../auth/auth.module";
import { ProductEntity } from "./entity/product.entity";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity, AdminEntity, UserEntity]), AuthModule],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule { }