import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from './schemas/skill.schema';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Skill',
        schema: SkillSchema,
      },
    ]),
  ],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
