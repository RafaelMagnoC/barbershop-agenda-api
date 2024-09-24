/*
  Warnings:

  - You are about to drop the column `cost` on the `service` table. All the data in the column will be lost.
  - You are about to drop the `userenterprise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userenterprise` DROP FOREIGN KEY `UserEnterprise_enterpriseId_fkey`;

-- DropForeignKey
ALTER TABLE `userenterprise` DROP FOREIGN KEY `UserEnterprise_userId_fkey`;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `cost`,
    ADD COLUMN `price` DECIMAL(65, 30) NULL,
    MODIFY `comission` DECIMAL(65, 30) NULL;

-- DropTable
DROP TABLE `userenterprise`;

-- CreateTable
CREATE TABLE `club` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `price` DECIMAL(65, 30) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `club_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `x_club_x_service` (
    `service_id` VARCHAR(191) NOT NULL,
    `club_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`service_id`, `club_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `x_user_x_enterprise` (
    `user_id` VARCHAR(191) NOT NULL,
    `enterprise_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_id`, `enterprise_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `x_club_x_service` ADD CONSTRAINT `x_club_x_service_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `x_club_x_service` ADD CONSTRAINT `x_club_x_service_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `x_user_x_enterprise` ADD CONSTRAINT `x_user_x_enterprise_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `x_user_x_enterprise` ADD CONSTRAINT `x_user_x_enterprise_enterprise_id_fkey` FOREIGN KEY (`enterprise_id`) REFERENCES `enterprise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
