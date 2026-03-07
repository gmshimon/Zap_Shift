-- AlterTable
ALTER TABLE "Parcel" ALTER COLUMN "weightKg" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "RiderApplication" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "nidNumber" TEXT NOT NULL,
    "drivingLicenseNumber" TEXT NOT NULL,
    "bikeBrandModelYear" TEXT NOT NULL,
    "bikeRegistrationNumber" TEXT NOT NULL,
    "note" TEXT,
    "status" "RiderStatus" NOT NULL DEFAULT 'PENDING',
    "userId" INTEGER,
    "approvedById" INTEGER,
    "approvedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiderApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RiderApplication_nidNumber_key" ON "RiderApplication"("nidNumber");

-- CreateIndex
CREATE UNIQUE INDEX "RiderApplication_drivingLicenseNumber_key" ON "RiderApplication"("drivingLicenseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "RiderApplication_bikeRegistrationNumber_key" ON "RiderApplication"("bikeRegistrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "RiderApplication_userId_key" ON "RiderApplication"("userId");

-- CreateIndex
CREATE INDEX "RiderApplication_email_idx" ON "RiderApplication"("email");

-- CreateIndex
CREATE INDEX "RiderApplication_phone_idx" ON "RiderApplication"("phone");

-- CreateIndex
CREATE INDEX "RiderApplication_status_idx" ON "RiderApplication"("status");

-- AddForeignKey
ALTER TABLE "RiderApplication" ADD CONSTRAINT "RiderApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
