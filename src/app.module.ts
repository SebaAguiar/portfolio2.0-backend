import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CertificateModule } from './certificate/certificate.module';
import { WorkModule } from './work/work.module';
import { FormationModule } from './formation/formation.module';
import { SkillModule } from './skill/skill.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [
    AdminModule,
    CertificateModule,
    WorkModule,
    FormationModule,
    SkillModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AboutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
