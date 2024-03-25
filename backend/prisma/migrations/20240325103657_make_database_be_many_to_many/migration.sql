-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `genres_id_fkey`;

-- CreateTable
CREATE TABLE `genre_movie` (
    `genreId` INTEGER NOT NULL,
    `movieId` INTEGER NOT NULL,

    PRIMARY KEY (`genreId`, `movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `genre_movie` ADD CONSTRAINT `genre_movie_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genre_movie` ADD CONSTRAINT `genre_movie_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
