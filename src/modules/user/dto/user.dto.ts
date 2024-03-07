export class CreateUserDto {
  readonly role: string;
  readonly email: string;
  readonly phone: string;
  readonly username: string;
}

export class UpdateUserDto {
  readonly email?: string;
  readonly phone?: string;
  readonly username?: string;
  readonly role?: string;
}

export class User {
  id: number;
  email: string;
  phone: string;
  username: string;
  role: string;
  date: Date;

  constructor(
    id: number,
    email: string,
    phone: string,
    username: string,
    role?: string,
  ) {
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.role = role;
    this.date = new Date();
  }
}
