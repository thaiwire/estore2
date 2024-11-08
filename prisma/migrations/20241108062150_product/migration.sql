-- CreateTable
CREATE TABLE "ProductType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mrp" REAL NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "productTypeId" INTEGER NOT NULL,
    "currentStock" INTEGER NOT NULL,
    "rating" REAL DEFAULT 0,
    "smallSize" INTEGER NOT NULL DEFAULT 0,
    "mediumSize" INTEGER NOT NULL DEFAULT 0,
    "largeSize" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Um" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "umNum" TEXT NOT NULL,
    "umName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductType_Name_key" ON "ProductType"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Um_umNum_key" ON "Um"("umNum");
