/*
  Warnings:

  - A unique constraint covering the columns `[administrator_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `administrator_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `administrator` DROP FOREIGN KEY `administrator_userId_fkey`;

-- AlterTable
ALTER TABLE `administrator` MODIFY `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `administrator_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_administrator_id_key` ON `user`(`administrator_id`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_administrator_id_fkey` FOREIGN KEY (`administrator_id`) REFERENCES `administrator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
