/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `enterprise` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `enterprise` MODIFY `logo` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `enterprise_cnpj_key` ON `enterprise`(`cnpj`);
