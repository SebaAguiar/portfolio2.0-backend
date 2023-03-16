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
import { CreateAdminDTO } from './dto/admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Post('/')
  async CreateAdmin(@Res() res, @Body() createAdminDTO: CreateAdminDTO) {
    console.log(createAdminDTO);
    const admin = await this.adminService.postAdmin(createAdminDTO);
    console.log('controler', admin);
    return res.status(HttpStatus.OK).json({
      message: 'recieved',
      admin,
    });
  }

  @Get('/')
  async GetAdmins(@Res() res) {
    const admins = await this.adminService.getAdmins();
    return res.status(HttpStatus.OK).json({
      message: 'admins',
      admins,
    });
  }

  @Get('/:id')
  async GetAdmin(@Res() res, @Param('id') id) {
    const admin = await this.adminService.getAdmin(id);
    if (!admin) throw new NotFoundException('admin not found');
    return res.status(HttpStatus.OK).json({
      message: 'admin',
      admin,
    });
  }

  @Put('/:id')
  async PutAdmin(
    @Res() res,
    @Param('id') id,
    @Body() createAdminDTO: CreateAdminDTO,
  ) {
    const admin = await this.adminService.putAdmin(id, createAdminDTO);
    if (!admin) throw new NotFoundException('admin not found');
    return res.status(HttpStatus.OK).json({
      message: 'Admin modified',
      admin,
    });
  }
}
