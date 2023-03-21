import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateModule } from './certificate/certificate.module';
import { WorkModule } from './work/work.module';
import { FormationModule } from './formation/formation.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    AdminModule,
    CertificateModule,
    WorkModule,
    FormationModule,
    SkillModule,
    MongooseModule.forRoot(
      'mongodb+srv://seba:WMd3GKHc0xcQsBuR@portfolio.io3uwju.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
