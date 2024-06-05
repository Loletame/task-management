import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) {}

    async createTask (title: string, description: string): Promise<Task>{
        const task = this.tasksRepository.create({ title, description, status: 'pending'});
        await this.tasksRepository.save(task);
        return task;
    }
    
    async getAllTasks(): Promise <Task[]> {
        return await this.tasksRepository.find();
    }

    async getTaskById(id: number): Promise<Task>{
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task){
            throw new NotFoundException(`la tarea con ID ${id} no ha sido encontrada`);
        }
        return task;
    }

    async updateTask (id: number, title: string, description: string, status: string): Promise<Task>{
        const task = await this.getTaskById(id);
        task.title = title;
        task.description = description;
        task.status = status;
        await this.tasksRepository.save(task);
        return task;
    }

    async deleteTask(id: number): Promise<void>{
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0){
            throw new NotFoundException(`la tarea con ID ${id} no ha sido encontrada`);
        }
    }
}

