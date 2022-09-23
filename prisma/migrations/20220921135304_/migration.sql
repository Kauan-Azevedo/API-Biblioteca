/*
  Warnings:

  - You are about to alter the column `amount` on the `books` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_books" ("amount", "bar_code", "description", "id", "title") SELECT "amount", "bar_code", "description", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
