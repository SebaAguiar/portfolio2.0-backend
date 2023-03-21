import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SkillInterface } from './interfaces/skill.interface';
import { CreateSkillDTO } from './dto/skill.dto';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel('Skill')
    private readonly skillModel: Model<SkillInterface>,
  ) {}

  async getSkills(): Promise<SkillInterface[]> {
    const skills = await this.skillModel.find({});
    return skills;
  }

  async getSkill(id: string): Promise<SkillInterface> {
    const skill = await this.skillModel.findById(id);
    return skill;
  }

  async postSkill(createSkillDTO: CreateSkillDTO): Promise<SkillInterface> {
    const skill = new this.skillModel(createSkillDTO);
    return await skill.save();
  }

  async putSkill(
    id: string,
    createSkillDTO: CreateSkillDTO,
  ): Promise<CreateSkillDTO> {
    const skill = await this.skillModel.findByIdAndUpdate(id, createSkillDTO, {
      new: true,
    });
    return skill;
  }
}
