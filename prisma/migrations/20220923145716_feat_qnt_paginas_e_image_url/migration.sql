-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image_url" TEXT DEFAULT 'false',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "qnt_paginas" INTEGER NOT NULL DEFAULT 250
);
INSERT INTO "new_books" ("amount", "bar_code", "description", "id", "title") SELECT "amount", "bar_code", "description", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
