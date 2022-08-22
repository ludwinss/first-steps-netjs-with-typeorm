import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LoginDTO } from "../dto";
import { UserEntity } from "../entity/user.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Encript } from "../../common/utils/encript";
import { UserDTO } from "../dto/user.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly DBUser: Repository<UserEntity>,
    ) { }
    async findOneUser({ login, pwd }: LoginDTO): Promise<UserDTO | null> {
        const findLogin = await this.DBUser.findOne({ relations: { login: true }, where: { login: { login: login } } })

        if (!findLogin) return null;

        if (!Encript.comparePWD(pwd, findLogin.login.pwd)) throw new HttpException('PWD incorrect', HttpStatus.UNAUTHORIZED)

        return plainToClass(UserDTO, findLogin, { excludeExtraneousValues: true, enableCircularCheck: true });
    }
}   