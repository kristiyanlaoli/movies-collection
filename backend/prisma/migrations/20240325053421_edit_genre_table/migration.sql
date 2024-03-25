/*
  Warnings:

  - You are about to drop the column `movieId` on the `genres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `genres_movieId_fkey`;

-- AlterTable
ALTER TABLE `genres` DROP COLUMN `movieId`;

-- AddForeignKey
ALTER TABLE `genres` ADD CONSTRAINT `genres_id_fkey` FOREIGN KEY (`id`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
