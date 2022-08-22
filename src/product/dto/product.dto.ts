import { ApiParam, ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class ProductCreateDTO {
    @ApiProperty()
    @Expose()
    @IsString()
    name: string;

    @ApiProperty()
    @Expose()
    @IsString()
    description: string | null;

    @ApiProperty()
    @Expose()
    @IsString()
    category: string | null;
}

export class ProductUpdateDTO {
    @ApiProperty()
    @Expose()
    @IsString()
    name: string | null;

    @ApiProperty()
    @Expose()
    @IsString()
    description: string | null;

    @ApiProperty()
    @Expose()
    @IsString()
    category: string | null;
}