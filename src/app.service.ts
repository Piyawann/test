import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as csvtojson from 'csvtojson';

@Injectable()
export class AppService {
  getHello(): string {
    return 'huhhuhhuhu';
  }

  // getHello7(res: Response): void {
  //   const results = [];

  //   fs.createReadStream('./csvf/product_Day.csv')
  //     .pipe(
  //       csv({
  //         headers: false,
  //       }),
  //     )
  //     .on('data', (data) => {
  //       console.log('data =>', data);
  //       results.push(data);
  //     })
  //     .on('end', () => {
  //       console.log('end =>', results);
  //       res.send(results);
  //     });
  // }

  async getHello4(res: Response): Promise<void> {
    const jsonArray = await csvtojson().fromFile('./csvf/cus1.csv');
    console.log('data cus1 =>', jsonArray);
    res.send(jsonArray);
  }
  async getHello5(res: Response): Promise<void> {
    const jsonArray = await csvtojson().fromFile('./csvf/am.csv');
    console.log('data product_AM =>', jsonArray);
    res.send(jsonArray);
  }
  async getHello6(res: Response): Promise<void> {
    const jsonArray = await csvtojson().fromFile('./csvf/pm.csv');
    console.log('data product_PM =>', jsonArray);
    res.send(jsonArray);
  }
  async getHello7(res: Response): Promise<void> {
    const jsonArray = await csvtojson().fromFile('./csvf/product_Day.csv');
    console.log('data product_Day =>', jsonArray);
    res.send(jsonArray);
  }
  async getHello8(res: Response): Promise<void> {
    const jsonArray = await csvtojson().fromFile('./csvf/con2.csv');
    console.log('data Con2 =>', jsonArray);
    res.send(jsonArray);
  }
}
