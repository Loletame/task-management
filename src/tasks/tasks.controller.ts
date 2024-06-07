import { Controller, Get, Post, Patch, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Post()
    @ApiOperation({ summary: 'Crear Nueva Tarea'})
    @ApiResponse({ status: 200, description: 'Esta Tarea ha sido registrada con exito!'})
    @ApiResponse({ status: 400, description: 'Error 300, entre el volante y el asiento jaja (Input no valido).'})
    
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto):Promise<Task>{
        const { title, description } = createTaskDto;
        return this.tasksService.createTask(title, description);
    }

    @Get()
    @ApiOperation({summary: 'Obtener todas las tareas'})
    @ApiResponse({status: 200, description: 'Devuelve todas las tareas'})
    getAllTasks(): Promise <Task[]>{
        return this.tasksService.getAllTasks();
    }

    @Get(':id')
    @ApiOperation({summary: 'Obtener tarea por su ID'})
    @ApiResponse({status: 200, description: 'Tarea devuelta'})
    @ApiResponse({status: 404, description: 'Tarea no encontrada'})
    getTaskById(@Param('id') id: number): Promise<Task>{
        return this.tasksService.getTaskById(id);
    }

    @Patch(':id')
    @ApiOperation({summary: 'Actualizar una tarea'})
    @ApiResponse({status: 200, description:'La tarea ha sido actualizada correctamente'})
    @ApiResponse({status: 404, description: 'Tarea no encontrada'})
    
    @UsePipes(ValidationPipe)
    updateTask(
        @Param('id') id:number,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: string,
    ): Promise<Task>{
        return this.tasksService.updateTask(id, title, description, status);
    }

    @Delete (':id')
    @ApiOperation({summary: 'Eliminar una tarea por su ID'})
    @ApiResponse({status: 200, description:'La tarea ha sido eliminada correctamente'})
    @ApiResponse({status: 404, description: 'Tarea no encontrada'})
    deleteTask(@Param('id') id: number): Promise<void>{
        return this.tasksService.deleteTask(id);
    }
}
