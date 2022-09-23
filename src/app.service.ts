import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    let content = {}
    content['title'] = "Bem-vindo a API de livros!";
    content['body'] = "Conheça o CRUD de API  de livros, aqui é onde voce pode encontrar suas obras favoritas, mas, caso não encontre por que não a adiciona voce mesmo?";

    return content;
  }
}
