import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [TodoModule,ConfigModule.forRoot()],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'datamart.sabuytech.com',
      port: 5432,
      username: 'sbd_napat_y',
      password: 'Zxcv@202304',
      database: 'datamart',
      entities: [],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
