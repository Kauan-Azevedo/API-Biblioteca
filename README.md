# 🎉 Projeto
* projeto contento um CRUD de api local usando o nestjs.

## ✨ Sobre
* O projeto foi construido usando as seguintes tecnologias:
    * NestJs
    * Prisma
    * Typescript

## Rotas
* Rotas da aplicação. URL base(http://localhost:3000):
  * (GET) home:
  ``` /```

  * (GET) Todos itens:
  ``` /books```

  * (GET) Um livro:
  ``` /books/{id} ```

  * (POST) Enviar livro:
  ``` /books```
    * Campos necessários:
      ```json
      {
          "image_url" : "String" Opcional,
	      "title": "String" Unico,
	      "description": "String",
	      "bar_code": "String" Unico,
	      "amount": Int,
          "qnt_paginas": Int Padrão(250)
      }
      ```
  * (PUT) Update Livro:
  ```/books/{id}```

  * (DELETE) Excluir Livro:
    * ##### WIP

## 🌱 Como iniciar?
* Para iniciar o projeto será necessário ter o node, para que em seguida usar o comando: ```npm install``` e em seguida ```npm run start:dev```

