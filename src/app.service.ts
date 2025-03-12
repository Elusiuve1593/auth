import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-req.dto';

export interface Users {
  userId: string;
  stripeUserId: string;
}

@Injectable()
export class AppService {
  private readonly users: Users[] = [
    { userId: '123', stripeUserId: '44553' },
    { userId: '456', stripeUserId: '46859' },
    { userId: '678', stripeUserId: '84852' },
  ];

  getUser({ userId }: GetUserRequest) {
    return this.users.find((user) => user.userId === userId);
  }
}
