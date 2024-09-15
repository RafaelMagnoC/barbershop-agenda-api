/*
  Warnings:

  - A unique constraint covering the columns `[whatsapp]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addresses` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `number` VARCHAR(191) NULL,
    MODIFY `complement` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `zipCode` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `whatsapp` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `facebook` VARCHAR(191) NULL,
    MODIFY `instagram` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `register_documents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `contacts_whatsapp_key` ON `contacts`(`whatsapp`);
