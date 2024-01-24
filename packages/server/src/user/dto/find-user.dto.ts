import { IsNumber, IsNotEmpty } from 'class-validator';

export class FindUserDto {
  @IsNotEmpty({ message: 'id限制不为空!' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'id限制为number类型!' },
  )
  id: string;
}
