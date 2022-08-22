import { Body, Controller, Post } from "@nestjs/common";
import { LoginDTO } from "../user/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('login')
    public async login(@Body() loginForm: LoginDTO) {
        return await this.authService.verify(loginForm)
    }
}