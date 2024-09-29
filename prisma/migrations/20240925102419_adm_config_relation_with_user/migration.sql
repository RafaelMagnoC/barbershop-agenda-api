/*
  Warnings:

  - Made the column `userId` on table `administrator` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `administrator` DROP FOREIGN KEY `administrator_userId_fkey`;

-- AlterTable
ALTER TABLE `administrator` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `administrator` ADD CONSTRAINT `administrator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
