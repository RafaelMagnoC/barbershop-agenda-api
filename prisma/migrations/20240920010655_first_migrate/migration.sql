-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `district` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `zipCode` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `contact_phone_key`(`phone`),
    UNIQUE INDEX `contact_whatsapp_key`(`whatsapp`),
    UNIQUE INDEX `contact_email_key`(`email`),
    UNIQUE INDEX `contact_facebook_key`(`facebook`),
    UNIQUE INDEX `contact_instagram_key`(`instagram`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_documents` (
    `id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `register_documents_cpf_key`(`cpf`),
    UNIQUE INDEX `register_documents_rg_key`(`rg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `token` VARCHAR(191) NULL,
    `addressId` VARCHAR(191) NULL,
    `contactId` VARCHAR(191) NULL,
    `registerDocumentId` VARCHAR(191) NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_token_key`(`token`),
    UNIQUE INDEX `users_addressId_key`(`addressId`),
    UNIQUE INDEX `users_contactId_key`(`contactId`),
    UNIQUE INDEX `users_registerDocumentId_key`(`registerDocumentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_registerDocumentId_fkey` FOREIGN KEY (`registerDocumentId`) REFERENCES `register_documents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
