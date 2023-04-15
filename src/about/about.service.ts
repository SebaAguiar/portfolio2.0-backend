import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AboutInterface } from './interfaces/about.interface';
import { AboutDTO } from './dtos/about.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel('About')
    private readonly aboutModel: Model<AboutInterface>,
  ) {}

  async getAbout(): Promise<AboutInterface[]> {
    const about = await this.aboutModel.find({});
    return about;
  }

  async postAbout(aboutDTO: AboutDTO): Promise<AboutInterface> {
    const about = new this.aboutModel(aboutDTO);
    return await about.save();
  }

  async putAbout(id: string, aboutDTO: AboutDTO): Promise<AboutInterface> {
    const about = await this.aboutModel.findByIdAndUpdate(id, aboutDTO, {
      new: true,
    });
    return about;
  }
}
