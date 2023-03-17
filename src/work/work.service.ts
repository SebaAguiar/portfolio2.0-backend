import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WorkInterface } from './interfaces/work.interface';
import { Model } from 'mongoose';
import { CreateWorkDTO } from './dto/work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel('Work')
    private readonly workModel: Model<WorkInterface>,
  ) {}

  async getWorks(): Promise<WorkInterface[]> {
    const work = await this.workModel.find({});
    return work;
  }

  async getWork(id: string): Promise<WorkInterface> {
    const work = await this.workModel.findById(id);
    return work;
  }

  async postWork(createWorkDTO: CreateWorkDTO): Promise<WorkInterface> {
    const work = new this.workModel(createWorkDTO);
    return await work.save();
  }

  async putWork(
    id: string,
    createWorkDTO: CreateWorkDTO,
  ): Promise<WorkInterface> {
    const work = await this.workModel.findByIdAndUpdate(id, createWorkDTO, {
      new: true,
    });
    return work;
  }
}
