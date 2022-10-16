/*
  Warnings:

  - You are about to drop the `Uf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Uf";

-- CreateTable
CREATE TABLE "Estados" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Estados_pkey" PRIMARY KEY ("id")
);
