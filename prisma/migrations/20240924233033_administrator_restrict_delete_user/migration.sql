-- DropForeignKey
ALTER TABLE `administrator` DROP FOREIGN KEY `administrator_userId_fkey`;

-- AddForeignKey
ALTER TABLE `administrator` ADD CONSTRAINT `administrator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
