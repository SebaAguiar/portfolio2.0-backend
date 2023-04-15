import {
  Controller,
  HttpStatus,
  Post,
  Res,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDTO } from './dto/certificate.dto';

@Controller('certificate')
export class CertificateController {
  constructor(private certificateService: CertificateService) {}

  @Get('/')
  async GetCertificates(@Res() res) {
    try {
      const cert = await this.certificateService.getCertificates();
      return res.status(HttpStatus.OK).json({
        message: 'certificates',
        cert,
      });
    } catch (error) {
      console.log('ERROR GET CERT');
      console.log(error);
      console.log('ERROR GET CERT');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Get('/:id')
  async GetCertificate(@Res() res, @Param('id') id) {
    try {
      const cert = await this.certificateService.getCertificate(id);
      if (!cert) throw new NotFoundException('certificate not found');
      return res.status(HttpStatus.OK).json({
        message: `certificate ${cert.name}`,
        cert,
      });
    } catch (error) {
      console.log('ERROR GET CERT ID');
      console.log(error);
      console.log('ERROR GET CERT ID');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Post('/')
  async PostAdmin(
    @Res() res,
    @Body() createCertificateDTO: CreateCertificateDTO,
  ) {
    try {
      const cert = await this.certificateService.postCertificate(
        createCertificateDTO,
      );
      return res.status(HttpStatus.CREATED).json({
        message: `${cert.name} posted successfully`,
        cert,
      });
    } catch (error) {
      console.log('ERROR POST CERT');
      console.log(error);
      console.log('ERROR POST CERT');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Put('/:id')
  async PutCertificate(
    @Res() res,
    @Param('id') id,
    @Body() createCertificateDTO: CreateCertificateDTO,
  ) {
    try {
      const cert = await this.certificateService.putCertificate(
        id,
        createCertificateDTO,
      );
      if (!cert) throw new NotFoundException('certificate not found');
      return res.status(HttpStatus.OK).json({
        message: 'Certificate updated successfully',
        cert,
      });
    } catch (error) {
      console.log('ERROR PUT CERTIFICATE');
      console.log(error);
      console.log('ERROR PUT CERTIFICATE');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }
}
