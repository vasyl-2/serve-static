import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getData(): Promise<{ prop: string }> {
    return { prop: 'data' };
  }
}
