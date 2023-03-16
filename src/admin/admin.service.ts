import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdminInterface } from './interfaces/admin.interface';
import { CreateAdminDTO } from './dto/admin.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<AdminInterface>,
  ) {}

  async getAdmins(): Promise<AdminInterface[]> {
    const admins = await this.adminModel.find({});
    return admins;
  }

  async getAdmin(id: string): Promise<AdminInterface> {
    const admin = await this.adminModel.findById(id);
    return admin;
  }

  async postAdmin(createAdminDTO: CreateAdminDTO): Promise<AdminInterface> {
    const admin = new this.adminModel(createAdminDTO);
    return await admin.save();
  }

  async putAdmin(
    id: string,
    createAdminDTO: CreateAdminDTO,
  ): Promise<AdminInterface> {
    if (createAdminDTO.password) {
      const hashedPassword = await hash(createAdminDTO.password, 10);
      createAdminDTO.password = hashedPassword;
    }
    const updated = await this.adminModel.findByIdAndUpdate(
      id,
      createAdminDTO,
      { new: true },
    );
    return updated;
  }
}
