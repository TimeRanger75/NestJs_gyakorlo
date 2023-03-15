import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { UpdatePlushieDto } from './plushie/dto/update-plushie.dto';
import { Plushie } from './plushie/entities/plushie.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/plushie/:plushieid/giveto/:preschoolerid')
  async Postplushie(@Param('plushieid')plushieid:number, @Param('preschoolerid')preschoolerid:Plushie, @Body()plushieDto:UpdatePlushieDto){
    const plushieRepo=this.dataSource.getRepository(Plushie);
    let plushie=(await plushieRepo.findOneBy({id:plushieid}))
    if(plushie.preschooler==null){
      return await this.dataSource.getRepository(Plushie).update({id:plushieid}, {preschooler:preschoolerid})
    }else if(plushie.preschooler!=null){
      throw new HttpException('This plushie is already assigned to a preschooler', HttpStatus.CONFLICT);
    }
  }

  
}
