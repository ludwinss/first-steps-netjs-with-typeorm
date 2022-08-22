import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class LoginDTO {
    @ApiProperty({ required: true, enum: ['0001', 'pepeelbueno'] })
    @Expose()
    @IsString()
    readonly login: string;

    @ApiProperty({ required: true, example: 'asd' })
    @IsString()
    @Exclude()
    readonly pwd: string;

    @Expose()
    @IsString()
    readonly type: string;

}