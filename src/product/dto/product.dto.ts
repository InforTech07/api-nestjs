import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO{
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly imageURL: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly createdAt: Date;
}