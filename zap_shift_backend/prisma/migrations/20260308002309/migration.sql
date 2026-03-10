/*
  Warnings:

  - You are about to drop the column `districtId` on the `RiderApplication` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `RiderApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RiderApplication" DROP COLUMN "districtId",
DROP COLUMN "regionId",
ADD COLUMN     "district" TEXT,
ADD COLUMN     "region" TEXT;
