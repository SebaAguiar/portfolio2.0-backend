import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormationSchema } from './schemas/formation.schema';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Formation',
        schema: FormationSchema,
      },
    ]),
  ],
  providers: [FormationService],
  controllers: [FormationController],
})
export class FormationModule {}
