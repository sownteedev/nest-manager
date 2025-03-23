import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, ['password'] as const) {
    _id: string;
} // OmitType: loai bo thuoc tinh password khoi CreateUserDto va tao ra UpdateUserDto
