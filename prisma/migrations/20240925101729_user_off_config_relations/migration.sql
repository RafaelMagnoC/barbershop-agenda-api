/*
  Warnings:

  - You are about to drop the column `address_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `contact_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `document_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `document` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_contact_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_document_id_fkey`;

-- AlterTable
ALTER TABLE `contact` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `document` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `address_id`,
    DROP COLUMN `contact_id`,
    DROP COLUMN `document_id`;

-- CreateIndex
CREATE UNIQUE INDEX `address_user_id_key` ON `address`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `contact_user_id_key` ON `contact`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `document_user_id_key` ON `document`(`user_id`);

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
