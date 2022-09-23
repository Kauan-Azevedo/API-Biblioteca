import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from './books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  async create(@Body() data: BookDTO) {
    return this.booksService.create(data)
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Put(":id")
  async update(@Param("id") id: BookDTO['id'], @Body() data: BookDTO) {
    return this.booksService.update(id, data);
  }

  // Kauan
  @Get(":id")
  async read(@Param("id") id: BookDTO['id']) {
    return this.booksService.read(id)
  }

  @Delete(":id")
  async delete(@Param("id") id: BookDTO['id']) {
    let response = {
      "livro": (this.booksService.delete(id)),
      "mensagem": "Foi deletado com sucesso"
    }
    return response
  }
}

