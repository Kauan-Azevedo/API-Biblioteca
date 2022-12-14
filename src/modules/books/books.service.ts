import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) { }

  async create(data: BookDTO) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      throw new Error('Livro já existente!');
    }

    const book = await this.prisma.book.create({
      data,
    });

    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findByName(title: BookDTO['title']) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        title,
      },
    });
    if (!bookExists) {
      throw new Error('Livro não existe');
    }
    return await this.prisma.book.findFirst({
      where: {
        title,
      },
    });
  }

  async update(id: BookDTO['id'], data: BookDTO) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Livro não existe');
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  // Kauan
  async read(id: BookDTO['id']) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!bookExists) {
      throw new Error('Livro não existe');
    }

    return await this.prisma.book.findFirst({
      where: {
        id,
      },
    });
  }

  async delete(id: BookDTO['id']) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
    if (!bookExists) {
      throw new Error('Livro não existe');
    }

    return await this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
