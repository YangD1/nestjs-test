import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LocalutilController } from './localutil/localutil.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'nest_test',
      models: [],
    }),
  ],
  controllers: [AppController, CatsController, LocalutilController],
  providers: [AppService],
})
export class AppModule {}
