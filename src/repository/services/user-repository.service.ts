import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async findByLogin(phone: string) {
    return await this.repository.findOne({ where: { phone } });
  }

  async save(phone: string, password: string) {
    const userToSave = new User();

    userToSave.phone = phone;
    userToSave.password = password;
    userToSave.isAccepted = false;
    userToSave.isBlocked = false;

    await this.repository.save(userToSave);
  }
}
