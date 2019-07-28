import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return await this.usersRepository.findOne(id);
  }

  async find(condition: any): Promise<Users[]> {
    return await this.usersRepository.find({ where: condition });
  }

  async save(usersData: Users): Promise<Users> {
    console.log(usersData);
    return await this.usersRepository.save(usersData);
  }

  async update(usersData: Users): Promise<UpdateResult> {
    return await this.usersRepository.update(usersData.id, usersData);
  }

  async delete(userId: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(userId);
  }
}
