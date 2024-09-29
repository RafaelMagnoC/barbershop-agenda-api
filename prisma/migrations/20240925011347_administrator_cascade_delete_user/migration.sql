-- DropForeignKey
ALTER TABLE `administrator` DROP FOREIGN KEY `administrator_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_contact_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_document_id_fkey`;

-- AlterTable
ALTER TABLE `address` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `administrator` ADD CONSTRAINT `administrator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contact`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
