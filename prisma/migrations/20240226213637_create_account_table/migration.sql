/*
  Warnings:

  - Added the required column `senha` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_accounts" ("balance", "email", "id", "name") SELECT "balance", "email", "id", "name" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
