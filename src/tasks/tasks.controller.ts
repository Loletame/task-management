import { Controller, Get, Post, Patch, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';



@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto):Promise<Task>{
        const { title, description } = createTaskDto;
        return this.tasksService.createTask(title, description);
    }

    @Get()
    getAllTasks(): Promise <Task[]>{
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Promise<Task>{
        return this.tasksService.getTaskById(id);
    }

    @Patch(':id')
    updateTask(
        @Param('id') id:number,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: string,
    ): Promise<Task>{
        return this.tasksService.updateTask(id, title, description, status);
    }
    @Delete (':id')
    deleteTask(@Param('id') id: number): Promise<void>{
        return this.tasksService.deleteTask(id);
    }
}
