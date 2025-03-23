import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema() // Khai bao schema
export class User {
  @Prop({ required: true }) // Khai bao thuoc tinh, required: bat buoc phai co
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  age : number;

  @Prop()
  address: string;

  @Prop()
  crateAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User); // Tao schema tu class User
