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
import { AboutService } from './about.service';
import { AboutDTO } from './dtos/about.dto';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}

  @Get('/')
  async GetAbout(@Res() res) {
    try {
      const about = await this.aboutService.getAbout();
      return res.status(HttpStatus.OK).json({
        message: 'about',
        about,
      });
    } catch (error) {
      console.log('ERROR GET ABOUT');
      console.log(error);
      console.log('ERROR GET ABOUT');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Post('/')
  async PostAbout(@Res() res, @Body() aboutDTO: AboutDTO) {
    try {
      const about = await this.aboutService.postAbout(aboutDTO);
      return res.status(HttpStatus.CREATED).json({
        message: 'About posted',
        about,
      });
    } catch (error) {
      console.log('ERROR POST ABOUT');
      console.log(error);
      console.log('ERROR POST ABOUT');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Put('/:id')
  async PutAvout(@Res() res, @Param('id') id, @Body() aboutDTO: AboutDTO) {
    try {
      const about = await this.aboutService.putAbout(id, aboutDTO);
      if (!about) throw new NotFoundException('certificate not found');
      return res.status(HttpStatus).json({
        message: 'About updated successfuly',
        about,
      });
    } catch (error) {
      console.log('ERROR PUT ABOUT');
      console.log(error);
      console.log('ERROR PUT ABOUT');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }
}
