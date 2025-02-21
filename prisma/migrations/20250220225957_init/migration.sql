/*
  Warnings:

  - The values [COMPACT,DSLR,FILM,MIRRORLESS,PROFESSIONAL] on the enum `CategoryName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryName_new" AS ENUM ('compact', 'dslr', 'film', 'mirrorless', 'professional');
ALTER TABLE "Category" ALTER COLUMN "title" TYPE "CategoryName_new" USING ("title"::text::"CategoryName_new");
ALTER TYPE "CategoryName" RENAME TO "CategoryName_old";
ALTER TYPE "CategoryName_new" RENAME TO "CategoryName";
DROP TYPE "CategoryName_old";
COMMIT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddresses" TEXT NOT NULL,
    "phoneNumbers" TEXT,
    "imageUrl" TEXT,
    "hasImage" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
