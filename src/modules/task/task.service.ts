import { Injectable } from '@nestjs/common';
import { CreateTaskDto, Task, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    new Task(1, 1, 'Task 1', false, 'Description 1', new Date()),
    new Task(2, 1, 'Task 2', false, 'Description 2', new Date()),
    new Task(3, 2, 'Task 3', true, 'Description 3', new Date()),
    new Task(4, 2, 'Task 4', false, 'Description 4', new Date()),
  ];

  findAll(userId: number): Task[] {
    return this.tasks.filter((task) => task.userId === Number(userId));
  }

  findById(userId: number, taskId: number): Task | string {
    const task = this.tasks.find(
      (task) => task.userId === Number(userId) && task.id === Number(taskId),
    );
    return task || 'No task found';
  }

  createTask(task: CreateTaskDto): Task {
    const newTask = new Task(
      this.tasks.length + 1,
      task.userId,
      task.title,
      task.done,
      task.description,
      new Date(),
    );
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(taskId: number, _task: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex(
      (task) =>
        task.userId === Number(_task.userId) && task.id === Number(taskId),
    );
    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ..._task,
    };
    return this.tasks[taskIndex];
  }

  deleteTask(userId: number, taskId: number): Task {
    const taskIndex = this.tasks.findIndex(
      (task) => task.userId === Number(userId) && task.id === Number(taskId),
    );
    const task = this.tasks[taskIndex];
    this.tasks = this.tasks.filter(
      (task) => task.userId === Number(userId) && task.id !== Number(taskId),
    );
    return task;
  }
}
