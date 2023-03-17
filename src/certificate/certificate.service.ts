import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCertificateDTO } from './dto/certificate.dto';
import { CertificateInterface } from './interfaces/certificate.interface';

@Injectable()
export class CertificateService {
  constructor(
    @InjectModel('Certificate')
    private readonly certificateModel: Model<CertificateInterface>,
  ) {}

  async getCertificates(): Promise<CertificateInterface[]> {
    const cert = await this.certificateModel.find({});
    return cert;
  }

  async getCertificate(id: string): Promise<CertificateInterface> {
    const cert = await this.certificateModel.findById(id);
    return cert;
  }

  async postCertificate(
    createCertificateDTO: CreateCertificateDTO,
  ): Promise<CertificateInterface> {
    const cert = new this.certificateModel(createCertificateDTO);
    return await cert.save();
  }

  async putCertificate(
    id: string,
    createCertificateDTO: CreateCertificateDTO,
  ): Promise<CreateCertificateDTO> {
    const cert = await this.certificateModel.findByIdAndUpdate(
      id,
      createCertificateDTO,
      { new: true },
    );
    return cert;
  }
}
