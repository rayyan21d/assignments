/*
  Warnings:

  - The `projects` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "projects",
ADD COLUMN     "projects" TEXT[];
