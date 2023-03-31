import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FormationInterface } from './interfaces/formation.interface';
import { CreateFormationDTO } from './dto/formation.dto';
import { Model } from 'mongoose';

@Injectable()
export class FormationService {
  constructor(
    @InjectModel('Formation')
    private readonly formationModel: Model<FormationInterface>,
  ) {}

  async getFormations(): Promise<FormationInterface[]> {
    let form = await this.formationModel.find({});
    form = form.sort((a: any, b: any) => b.date - a.date);
    return form;
  }

  async getFormation(id: string): Promise<FormationInterface> {
    const form = await this.formationModel.findById(id);
    return form;
  }

  async postFormation(
    createFormationDTO: CreateFormationDTO,
  ): Promise<FormationInterface> {
    const form = new this.formationModel(createFormationDTO);
    return await form.save();
  }

  async putFormation(
    id: string,
    createFormationDTO: CreateFormationDTO,
  ): Promise<FormationInterface> {
    const form = await this.formationModel.findByIdAndUpdate(
      id,
      createFormationDTO,
      {
        new: true,
      },
    );
    return form;
  }
}
