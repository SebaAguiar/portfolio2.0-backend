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
import { SkillService } from './skill.service';
import { CreateSkillDTO } from './dto/skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get('/')
  async GetSkills(@Res() res) {
    try {
      const skills = await this.skillService.getSkills();
      return res.status(HttpStatus.OK).json({
        message: 'All Skills',
        skills,
      });
    } catch (error) {
      console.log('ERROR GET SKILLS');
      console.log(error);
      console.log('ERROR GET SKILLS');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Get('/:id')
  async GetSkill(@Res() res, @Param() { id }) {
    try {
      const skill = await this.skillService.getSkill(id);
      console.log('skill', skill);
      if (!skill) throw new NotFoundException('certificate not found');
      return res.status(HttpStatus.OK).json({
        message: `skill ${skill.name}`,
        skill,
      });
    } catch (error) {
      console.log('ERROR GET SKILL ID');
      console.log(error);
      console.log('ERROR GET SKILL ID');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Post('/')
  async PostSkill(@Res() res, @Body() createSkillDTO: CreateSkillDTO) {
    try {
      const skill = await this.skillService.postSkill(createSkillDTO);
      return res.status(HttpStatus.CREATED).json({
        message: `${skill.name} created successfully`,
        skill,
      });
    } catch (error) {
      console.log('ERROR POST SKILL');
      console.log(error);
      console.log('ERROR POST SKILL');
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error, sorry...',
      });
    }
  }

  @Put('/:id')
  async PutSkill(
    @Res() res,
    @Param() { id },
    @Body() createSkillDTO: CreateSkillDTO,
  ) {
    try {
      const skill = await this.skillService.putSkill(id, createSkillDTO);
      if (!skill) throw new NotFoundException('skill not found');
      return res.status(HttpStatus.OK).json({
        message: `${skill.name} updated successfully`,
        skill,
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
