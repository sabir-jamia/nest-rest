import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Post()
  store(@Body() usersData: Users): Promise<Users> {
    return this.usersService.save(usersData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usersData: Users): Promise<any> {
    usersData.id = Number(id);
    return this.usersService.update(usersData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    const userId = Number(id);
    return this.usersService.delete(userId);
  }
}
