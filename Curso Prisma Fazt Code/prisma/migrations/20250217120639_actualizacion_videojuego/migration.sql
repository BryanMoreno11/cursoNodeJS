/*
  Warnings:

  - You are about to alter the column `precio` on the `Videojuego` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Videojuego" ADD COLUMN     "descripcion" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "precio" SET DATA TYPE DECIMAL(10,2);
