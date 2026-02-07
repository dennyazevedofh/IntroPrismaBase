/*
  Warnings:

  - You are about to drop the column `subtitulo` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `subtitulo`,
    ADD COLUMN `subtitle` VARCHAR(191) NULL;
