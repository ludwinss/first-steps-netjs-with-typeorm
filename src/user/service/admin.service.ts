import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LoginDTO } from "../dto";
import { AdminEntity } from "../entity/admin.entity";
import { Encript } from "../../common/utils/encript";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDTO } from "../dto/user.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly DBAdmin: Repository<AdminEntity>,
    ) { }
    async findOneAdmin({ login, pwd }: LoginDTO): Promise<UserDTO> {
        const findLogin = await this.DBAdmin.findOne({ relations: { login: true }, where: { login: { login: login } } })
        if (!findLogin) return null;

        if (!await Encript.comparePWD(pwd, findLogin.login.pwd)) throw new HttpException('PWD incorrect', HttpStatus.UNAUTHORIZED)
        return plainToClass(UserDTO, findLogin, { excludeExtraneousValues: true, enableCircularCheck: true });
    }
}