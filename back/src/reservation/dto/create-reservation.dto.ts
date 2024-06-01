import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  état: string;
}
