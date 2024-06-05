import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import  {CreateDto} from './DTO/create-dto';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string{
    return this.appService.getHello();
  }
  @Get('allbooks')
  getbooks():any{
    return this.appService.getbooks();
  }
  @Post()
  create (@Body() CreateDto: CreateDto){
    return this.appService.create(CreateDto);
  }
  @Put('/Update/:id')
  update (@Param('id')id:Number ,@Body() UpdateDto: CreateDto){
    return this.appService.update2(id,UpdateDto);
  }
  @Delete('/Delete/:id')
  remove (@Param('id')id:Number ,@Body() DeleteDto: CreateDto){
    return this.appService.Delete(id);
  }

  //2eme methode 
    // @Put('/update/:id')
  // update(@Param('id') idwillbeDelated: String, @Body() UpdateDto:CreateDto)
  // {
  //    return this.appService.update(idwillbeDelated,UpdateDto); 
  //   console.log(idwillbeDelated,UpdateDto); 
    //Put : Update All patch: Update Partielle
  // }  
}