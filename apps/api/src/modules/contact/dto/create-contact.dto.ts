import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'Taro Yamada' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @ApiProperty({ example: 'taro@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'I would like to discuss a project.' })
  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  message: string;
}
