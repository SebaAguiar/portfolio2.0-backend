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
import { WorkService } from './work.service';
import { CreateWorkDTO } from './dto/work.dto';

@Controller('work')
export class WorkController {
  constructor(private workService: WorkService) {}

  @Get('/')
  async GetWorks(@Res() res) {
    try {
      const work = await this.workService.getWorks();
      return res.status(HttpStatus.OK).json({
        message: 'works',
        work,
      });
    } catch (error) {
      console.log('ERROR GET WORKS');
      console.log(error);
      console.log('ERROR GET WORKS');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Get('/:id')
  async GetWork(@Res() res, @Param() id) {
    try {
      const work = await this.workService.getWork(id);
      if (!work) throw new NotFoundException('work not found');
      return res.status(HttpStatus.OK).json({
        message: `work ${work.name}`,
        work,
      });
    } catch (error) {
      console.log('ERROR GET WORK');
      console.log(error);
      console.log('ERROR GET WORK');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Post('/')
  async PostWork(@Res() res, @Body() createWorkDTO: CreateWorkDTO) {
    try {
      const work = await this.workService.postWork(createWorkDTO);
      return res.status(HttpStatus.CREATED).json({
        message: `${work.name} posted successfully`,
        work,
      });
    } catch (error) {
      console.log('ERROR POST WORK');
      console.log(error);
      console.log('ERROR POST WORK');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Put('/:id')
  async PutWork(@Res() res, @Param() id, @Body() createWorkDTO: CreateWorkDTO) {
    try {
      const work = await this.workService.putWork(id, createWorkDTO);
      if (!work) throw new NotFoundException('work not found');
      return res.status(HttpStatus.OK).json({
        message: 'Work updated successfully',
        work,
      });
    } catch (error) {
      console.log('ERROR PUT WORK');
      console.log(error);
      console.log('ERROR PUT WORK');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }
}
