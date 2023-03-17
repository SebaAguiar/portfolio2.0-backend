import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateController } from './certificate.controller';
import { CertificateService } from './certificate.service';
import { CertificateSchema } from './schemas/certificate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Certificate',
        schema: CertificateSchema,
      },
    ]),
  ],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificateModule {}
