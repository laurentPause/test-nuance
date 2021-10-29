import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { User, UserDocument } from './schemas/user.schemas';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  async findOne(filter: FilterQuery<UserDocument>): Promise<User> {
    return this.userModel.findOne(filter).exec();
  }

  async createUser(user: any): Promise<Document> {
    user.role = await this.getRole(0);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    console.log(user);

    try {
      const res = this.userModel.create(user);
      return res;
    } catch (error) {
      return error;
    }
  }

  async getRole(level: number): Promise<Document> {
    return this.roleModel.findOne({ level: level }).exec();
  }
}
