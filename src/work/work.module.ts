import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from './schemas/work.schema';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Work',
        schema: WorkSchema,
      },
    ]),
  ],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
