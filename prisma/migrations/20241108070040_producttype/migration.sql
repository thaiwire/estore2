/*
  Warnings:

  - You are about to drop the column `Name` on the `ProductType` table. All the data in the column will be lost.
  - Added the required column `name` to the `ProductType` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_ProductType" ("id") SELECT "id" FROM "ProductType";
DROP TABLE "ProductType";
ALTER TABLE "new_ProductType" RENAME TO "ProductType";
CREATE UNIQUE INDEX "ProductType_name_key" ON "ProductType"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
