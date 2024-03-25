/*
  Warnings:

  - You are about to drop the column `movie_id` on the `genres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `genres_movie_id_fkey`;

-- AlterTable
ALTER TABLE `genres` DROP COLUMN `movie_id`;

-- AddForeignKey
ALTER TABLE `genres` ADD CONSTRAINT `genres_id_fkey` FOREIGN KEY (`id`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
