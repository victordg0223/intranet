import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth0Guard } from '../../auth/auth0.guard';

@Controller('users')
@UseGuards(Auth0Guard) // TODO: Replace with real Auth0 guard
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Request() req) {
    // TODO: Extract tenantId from authenticated user
    const tenantId = req.user?.tenantId || 'default-tenant';
    return this.usersService.findAll(tenantId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const tenantId = req.user?.tenantId || 'default-tenant';
    return this.usersService.findOne(id, tenantId);
  }

  @Post()
  async create(
    @Body() createUserDto: { email: string; name: string; role?: string },
    @Request() req,
  ) {
    const tenantId = req.user?.tenantId || 'default-tenant';
    return this.usersService.create({
      ...createUserDto,
      tenantId,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: { name?: string; role?: string },
    @Request() req,
  ) {
    const tenantId = req.user?.tenantId || 'default-tenant';
    return this.usersService.update(id, tenantId, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Request() req) {
    const tenantId = req.user?.tenantId || 'default-tenant';
    return this.usersService.delete(id, tenantId);
  }
}
