import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { ProductCreateDTO, ProductUpdateDTO } from "./dto/product.dto";
import { SellDTO } from "./dto/sell.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Post('create')
    public async CreateNewProduct(@Body() newProduct: ProductCreateDTO, @Req() req: any) {
        if (req.user.type !== "A") throw new HttpException("Don't be a Admin", HttpStatus.UNAUTHORIZED)
        return this.productService.createNewProduct(newProduct, req.user.id);
    }
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Post('user/cart')
    public async AddUserCart(@Body() newProduct: SellDTO, @Req() req: any) {
        if (req.user.type !== "U") throw new HttpException("Don't be a User", HttpStatus.UNAUTHORIZED)
        return this.productService.addCart(req.user.id, newProduct.id);
    }
    @ApiBearerAuth()
    @ApiParam({ name: 'id', required: true })
    @UseGuards(AuthGuard())
    @Post("/:id")
    public async UpdatetProduct(@Param('id') id, @Body() newProduct: ProductUpdateDTO, @Req() req: any) {
        if (req.user.type !== "A") throw new HttpException("Don't be a Admin", HttpStatus.UNAUTHORIZED)
        return this.productService.modifyProduct(newProduct, id)
    }
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('all')
    public async AllProduct() {
        return this.productService.readAllProducts()
    }
    @ApiBearerAuth()
    @ApiParam({ name: 'id', required: true })
    @UseGuards(AuthGuard())
    @Delete('/:id')
    public async DeleteProduct(@Param('id') id) {
        return this.productService.deleteProduct(id)
    }
    @ApiBearerAuth()
    @ApiParam({ name: 'id', required: true })
    @UseGuards(AuthGuard())
    @Delete('/user/cart/:id')
    public async DeleteProductByUser(@Param('id') id, @Req() req: any) {
        if (req.user.type !== "U") throw new HttpException("Don't be a User", HttpStatus.UNAUTHORIZED)
        return this.productService.deleteCartProduct(id, req.user.id)
    }
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get('user')
    public async FindCartByUser(@Req() req: any) {
        if (req.user.type !== "U") throw new HttpException("Don't be a User", HttpStatus.UNAUTHORIZED)
        return this.productService.readProductsByUser(req.user.id)
    }
}