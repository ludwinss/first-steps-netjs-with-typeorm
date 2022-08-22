import { LoginDTO } from "./login.dto";
import { Expose, Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';


export class UserDTO {
    @Expose()
    @IsNumber()
    readonly id: number;

    @Expose()
    @IsString()
    readonly name: string;
    @Expose()
    @IsDate()
    readonly created_at: string;

    @Expose()
    @Type(() => LoginDTO)
    login: LoginDTO

}