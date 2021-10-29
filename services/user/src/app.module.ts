import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Role, RoleSchema } from './schemas/role.schema';
import { User, UserSchema } from './schemas/user.schemas';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/users'),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
