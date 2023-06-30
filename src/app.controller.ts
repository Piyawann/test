import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/Cus1')
  getcus1(@Req() req: Request, @Res() res: Response): void {
    this.appService.getHello8(res);
  }
  @Get('/AM')
  getAM(@Req() req: Request, @Res() res: Response): void {
    this.appService.getHello5(res);
  }
  @Get('/PM')
  getPM(@Req() req: Request, @Res() res: Response): void {
    this.appService.getHello6(res);
  }
  @Get('/Day')
  getDay(@Req() req: Request, @Res() res: Response): void {
    this.appService.getHello7(res);
  }
  @Get('/Con2')
  getCon1(@Req() req: Request, @Res() res: Response): void {
    this.appService.getHello8(res);
  }
}

