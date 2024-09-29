/*
  Warnings:

  - You are about to drop the column `userId` on the `administrator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `administrator` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `administrator_userId_key` ON `administrator`;

-- AlterTable
ALTER TABLE `administrator` DROP COLUMN `userId`,
    ADD COLUMN `user_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `administrator_user_id_key` ON `administrator`(`user_id`);
