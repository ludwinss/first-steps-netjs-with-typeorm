import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { authorize } from "passport";
require('dotenv').config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        })
    }
    async validate(payload: any) {
        return payload;
    }

}