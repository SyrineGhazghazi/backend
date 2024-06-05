import { Injectable } from '@nestjs/common';
import  {CreateDto} from './DTO/create-dto';
import { title } from 'process';

@Injectable()
export class AppService {

  private books = []; //Décalartion du tableau des variables 
  getHello(): string {
    return '!';
  }
  getbooks() :any {
    return this.books;
  }
  PutBook(): any{
    return this.books;
  }
  create(CreateDto:CreateDto){
    this.books.push(CreateDto); //pusher les variables dans un tableau 
    console.log(CreateDto);  //Affichage dans le console 
    return CreateDto; // affichage au niveau de PostMan 
  }

   update2(id,newData):any {
    const  updatedbooks = this.books.forEach(book => {
      if (book.id === id) {
        return { id:id,title:newData.title,Description:newData.Description };
      } else {
        return book;
      }
     });
     return newData
   }
   Delete(id):any {
    this.books = this.books.filter(book=>book.id != id);
      return this.books
    }
   }