export class CreateTaskDto {
  readonly userId: number;
  readonly title: string;
  readonly done: boolean;
  readonly description: string;
}

export class UpdateTaskDto {
  readonly userId: number;
  readonly title: string;
  readonly done: boolean;
  readonly description: string;
}

export class Task {
  id: number;
  userId: number;
  title: string;
  done: boolean;
  description: string;
  createdAt: Date;

  constructor(
    id: number,
    userId: number,
    title: string,
    done: boolean,
    description: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.done = done;
    this.description = description;
    this.createdAt = createdAt;
  }
}
