import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { InvestmentsModule } from '@app/investments';
import { InvestmentsController } from '@app/investments/investments.controller';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [InvestmentsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(InvestmentsController);
  }
}
