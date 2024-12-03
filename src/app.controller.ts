import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-data')
  async getData(): Promise<{ prop: string }> {
    console.log('ROUTE______________________________')
    return await this.appService.getData();
  }
}
