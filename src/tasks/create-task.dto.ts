import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Titulo de la Tarea'})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Descripcion de la tarea'})
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'pending', enum: ['pending', 'in progress', 'done'] })
  @IsString()
  @IsIn(['pending', 'in progress', 'done'])
  status: string;



}
