import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormationSchema } from './schemas/formation.schema';
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
  controllers: [FormationController],
  providers: [FormationController],
})
export class FormationModule {}
