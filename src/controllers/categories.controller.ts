import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  constructor(){}

  @Get(':id/prosucts/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string){
    return `category: ${id} and productId: ${productId}`
  }

}
