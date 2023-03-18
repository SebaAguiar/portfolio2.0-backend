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
import { FormationService } from './formation.service';
import { CreateFormationDTO } from './dto/formation.dto';

@Controller('formation')
export class FormationController {
  constructor(private formationService: FormationService) {}

  @Get('/')
  async GetWorks(@Res() res) {
    try {
      const form = await this.formationService.getFormations();
      return res.status(HttpStatus.OK).json({
        message: 'all formations',
        form,
      });
    } catch (error) {
      console.log('ERROR GET FORMATIONS');
      console.log(error);
      console.log('ERROR GET FORMATIONS');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Get('/:id')
  async GetFormation(@Res() res, @Param() id) {
    try {
      const form = await this.formationService.getFormation(id);
      if (!form) throw new NotFoundException('formation not found');
      return res.status(HttpStatus.OK).json({
        message: `formation ${form.name}`,
        form,
      });
    } catch (error) {
      console.log('ERROR GET FORMATION');
      console.log(error);
      console.log('ERROR GET FORMATION');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Post('/')
  async PostFromation(
    @Res() res,
    @Body() createFromationDTO: CreateFormationDTO,
  ) {
    try {
      const form = await this.formationService.postFormation(
        createFromationDTO,
      );
      return res.status(HttpStatus.CREATED).json({
        message: `${form.name} created successfully`,
        form,
      });
    } catch (error) {
      console.log('ERROR POST FORMATION');
      console.log(error);
      console.log('ERROR POST FORMATION');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Put('/:id')
  async PutFormation(
    @Res() res,
    @Param() id,
    @Body() createFormationDTO: CreateFormationDTO,
  ) {
    try {
      const form = await this.formationService.putFormation(
        id,
        createFormationDTO,
      );
      if (!form) throw new NotFoundException('formation not found');
      return res.status(HttpStatus.OK).json({
        message: `${form.name} updated successfully`,
        form,
      });
    } catch (error) {
      console.log('ERROR PUT FORMATION');
      console.log(error);
      console.log('ERROR PUT FORMATION');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }
}
