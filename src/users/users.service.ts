import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { genSaltSync, hashSync} from 'bcryptjs';

@Injectable()
export class  UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const hashPassword = this.getHashPassword(password);
    let create = await this.userModel.create({ email, password: hashPassword });
    return create;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  update(updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: updateUserDto._id }, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id : id });
  }
}
