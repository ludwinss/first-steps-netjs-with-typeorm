import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNumber } from "class-validator";

export class SellDTO {
    @ApiProperty()
    @Expose()
    @IsNumber()
    id: number;

}