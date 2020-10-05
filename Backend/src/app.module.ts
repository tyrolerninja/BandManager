import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedlemModule } from './Member/member.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MedlemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
