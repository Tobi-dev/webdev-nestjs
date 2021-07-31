import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {Student} from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>){}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const user = this.studentRepository.create(createStudentDto);

    try{
      const newUser = await this.studentRepository.save(user);

      return newUser;
    }catch(err){
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const user = await this.studentRepository.findOne(id);
    
    if(!user){
      throw new NotFoundException();
    }

    return user;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const user = await this.studentRepository.findOne(id);
    
    if(!user){
      throw new NotFoundException();
    }

    await this.studentRepository.update(id, updateStudentDto);

    return await this.studentRepository.findOne(id);
  }

  async remove(id: number): Promise<any> {
    const user = await this.studentRepository.findOne(id);

    if(!user){
      throw new NotFoundException();
    }

    await this.studentRepository.delete(id);

    return `user with id ${id} has been deleted successfully`;
  }
}
