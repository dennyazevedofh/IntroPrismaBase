/*
  Warnings:

  - You are about to drop the column `sbtitle` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `sbtitle`,
    ADD COLUMN `subtitulo` VARCHAR(191) NULL;
