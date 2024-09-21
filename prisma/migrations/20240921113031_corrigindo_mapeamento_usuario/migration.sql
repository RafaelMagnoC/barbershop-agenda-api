/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_contactId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_registerDocumentId_fkey`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `gender` ENUM('male', 'female', 'other', 'prefer_not_to_say') NOT NULL,
    `username` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `token` VARCHAR(191) NULL,
    `addressId` VARCHAR(191) NULL,
    `contactId` VARCHAR(191) NULL,
    `registerDocumentId` VARCHAR(191) NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_token_key`(`token`),
    UNIQUE INDEX `user_addressId_key`(`addressId`),
    UNIQUE INDEX `user_contactId_key`(`contactId`),
    UNIQUE INDEX `user_registerDocumentId_key`(`registerDocumentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_registerDocumentId_fkey` FOREIGN KEY (`registerDocumentId`) REFERENCES `register_documents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
