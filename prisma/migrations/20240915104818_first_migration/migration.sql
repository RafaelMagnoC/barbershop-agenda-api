-- CreateTable
CREATE TABLE `addresses` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `facebook` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contacts_phone_key`(`phone`),
    UNIQUE INDEX `contacts_email_key`(`email`),
    UNIQUE INDEX `contacts_facebook_key`(`facebook`),
    UNIQUE INDEX `contacts_instagram_key`(`instagram`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_documents` (
    `id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,

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
ALTER TABLE `users` ADD CONSTRAINT `users_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `addresses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_registerDocumentId_fkey` FOREIGN KEY (`registerDocumentId`) REFERENCES `register_documents`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
