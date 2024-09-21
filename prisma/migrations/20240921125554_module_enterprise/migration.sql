/*
  Warnings:

  - You are about to drop the column `addressId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `contactId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `registerDocumentId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `register_documents` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[address_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contact_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_contactId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_registerDocumentId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `addressId`,
    DROP COLUMN `contactId`,
    DROP COLUMN `registerDocumentId`,
    ADD COLUMN `address_id` VARCHAR(191) NULL,
    ADD COLUMN `contact_id` VARCHAR(191) NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `document_id` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- DropTable
DROP TABLE `register_documents`;

-- CreateTable
CREATE TABLE `document` (
    `id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NULL,
    `rg` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `document_cpf_key`(`cpf`),
    UNIQUE INDEX `document_rg_key`(`rg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enterprise` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `social_reason` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `address_id` VARCHAR(191) NULL,
    `contact_id` VARCHAR(191) NULL,

    UNIQUE INDEX `enterprise_address_id_key`(`address_id`),
    UNIQUE INDEX `enterprise_contact_id_key`(`contact_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_address_id_key` ON `user`(`address_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_contact_id_key` ON `user`(`contact_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_document_id_key` ON `user`(`document_id`);

-- AddForeignKey
ALTER TABLE `enterprise` ADD CONSTRAINT `enterprise_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enterprise` ADD CONSTRAINT `enterprise_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contact`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contact`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `document`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
