import { IsString } from 'class-validator';

export class UpdateReservationDto {
  @IsString()
  état: string;
}
