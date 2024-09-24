/*
  Warnings:

  - You are about to alter the column `price` on the `club` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.

*/
-- AlterTable
ALTER TABLE `club` MODIFY `price` DOUBLE NULL;
