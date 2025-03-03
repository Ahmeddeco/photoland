-- AlterTable
ALTER TABLE "Manufacture" ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
