import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity } from "src/user/entity/admin.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { ProductCreateDTO, ProductUpdateDTO } from "./dto/product.dto";
import { ProductEntity } from "./entity/product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly DBProduct: Repository<ProductEntity>,
        @InjectRepository(AdminEntity)
        private readonly DBAdmin: Repository<AdminEntity>,
        @InjectRepository(UserEntity)
        private readonly DBUser: Repository<UserEntity>
    ) { }

    async createNewProduct(newProduct: ProductCreateDTO, idAdmin: number) {
        const response = await this.DBProduct.save(newProduct);
        const findAdmin = await this.DBAdmin.findOneBy({ id: idAdmin })
        response.fill = [findAdmin]
        this.DBProduct.save(response)
        return response;
    }
    async modifyProduct(product: ProductUpdateDTO, id: number) {
        const findProduct = await this.DBProduct.findOneBy({ id: id });
        findProduct.category = product.category;
        findProduct.name = product.name;
        findProduct.description = product.description;
        return this.DBProduct.save(findProduct);
    }
    readAllProducts() {
        return this.DBProduct.find();
    }
    async addCart(idUser: number, idProduct: number) {
        const findProduct = await this.DBProduct.findOne({ where: { id: idProduct } })
        if (!findProduct) throw new HttpException('dont found product', HttpStatus.NOT_FOUND)
        const findUser = await this.DBUser.findOneBy({ id: idUser })
        findProduct.sell = [findUser];
        this.DBProduct.save(findProduct);
    }
    readProductsByUser(id: number) {
        return this.DBProduct.findBy({ sell: { id: id } })
    }
    deleteProduct(id: number) {
        return this.DBProduct.delete({ id: id })
    }
    async deleteCartProduct(id: number, idUser: number) {

        const findProduct = await this.DBProduct.findOne({ where: { id: id }, relations: { sell: true } })
        findProduct.sell = findProduct.sell.filter(item => item.id !== idUser)
        return this.DBProduct.save(findProduct)
    }

}