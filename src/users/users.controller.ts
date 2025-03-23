import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose from 'mongoose';

@Controller('users') // localhost:3000/users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() CreateUserDTO: CreateUserDto ) { // Body la du lieu gui len tu client, kieu req.body trong express
    // const myEmail: string = req.body.email;
    return this.usersService.create(CreateUserDTO);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Id is invalid';
    }
    return this.usersService.findOne(id);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'Id is invalid';
    }
    return this.usersService.remove(id);
  }
}
