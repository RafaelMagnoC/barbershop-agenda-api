/*
  Warnings:

  - You are about to drop the column `isActive` on the `users` table. All the data in the column will be lost.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `register_documents` MODIFY `cpf` VARCHAR(191) NULL,
    MODIFY `rg` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `isActive`,
    ADD COLUMN `gender` ENUM('male', 'female', 'other', 'prefer_not_to_say') NOT NULL,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `username` VARCHAR(191) NULL;
