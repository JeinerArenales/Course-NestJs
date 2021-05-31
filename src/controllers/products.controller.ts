import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  constructor() { }

  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ) {
    return `limit: ${limit} and offset: ${offset} and brand ${brand}`
  }

  @Get('filter')
  getProductFilter() {
    return `Filter`
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product${id}`
  }

}
