import { Injectable } from "@nestjs/common";
import { AdminService } from "../user/service/admin.service";
import { LoginDTO } from "../user/dto";
import { UserDTO } from "../user/dto/user.dto";
import { UserService } from "../user/service/user.service";
import { JwtService } from "@nestjs/jwt"
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService
    ) { }

    public async verify(payload: LoginDTO) {
        const findAdmin = await this.adminService.findOneAdmin(payload);
        if (findAdmin) return this._createToken(findAdmin);
        const findUser = await this.userService.findOneUser(payload);
        if (findUser) return this._createToken(findUser);

    }
    private _createToken(user: UserDTO) {
        return this.jwtService.sign({ id: user.id, name: user.name, create_at: user.created_at, type: user.login.type })
    }

    public validateToken(token: string) {
        try {
            return jwt.verify(token, process.env.SERCRET);
        } catch {
            return null;
        }
    }
}