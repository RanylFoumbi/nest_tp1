import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':userId')
  findAllTasks(@Param('userId') userId: number) {
    return this.taskService.findAll(userId);
  }

  @Get(':userId/:taskId')
  findTaskById(
    @Param('userId') userId: number,
    @Param('taskId') taskId: number,
  ) {
    return this.taskService.findById(userId, taskId);
  }

  @Post()
  createTask(@Body() taskData: CreateTaskDto) {
    return this.taskService.createTask(taskData);
  }

  @Patch(':taskId')
  updateTask(@Param('taskId') taskId: number, @Body() taskData: UpdateTaskDto) {
    return this.taskService.updateTask(taskId, taskData);
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: number, @Body('userId') userId: number) {
    return this.taskService.deleteTask(userId, taskId);
  }
}
