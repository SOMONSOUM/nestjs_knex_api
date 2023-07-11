import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { KnexModule } from './knex/knex.module';

@Module({
  imports: [AuthModule, KnexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
