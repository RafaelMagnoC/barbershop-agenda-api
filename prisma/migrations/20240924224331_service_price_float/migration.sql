/*
  Warnings:

  - You are about to alter the column `comission` on the `service` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `price` on the `service` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `service` MODIFY `comission` DOUBLE NULL,
    MODIFY `price` DOUBLE NULL;
