/*
  Warnings:

  - Added the required column `movie_id` to the `genres` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `genres_id_fkey`;

-- AlterTable
ALTER TABLE `genres` ADD COLUMN `movie_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `genres` ADD CONSTRAINT `genres_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
