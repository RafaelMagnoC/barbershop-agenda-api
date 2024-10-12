-- CreateTable
CREATE TABLE `agenda` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `start_time` TIME NOT NULL,
    `end_time` TIME NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `x_attendant_x_agenda` (
    `attendant_id` VARCHAR(191) NOT NULL,
    `agenda_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`attendant_id`, `agenda_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `x_attendant_x_agenda` ADD CONSTRAINT `x_attendant_x_agenda_attendant_id_fkey` FOREIGN KEY (`attendant_id`) REFERENCES `attendant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `x_attendant_x_agenda` ADD CONSTRAINT `x_attendant_x_agenda_agenda_id_fkey` FOREIGN KEY (`agenda_id`) REFERENCES `agenda`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
