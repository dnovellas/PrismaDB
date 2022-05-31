-- CreateTable
CREATE TABLE "AdvancedExplorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 0,
    "hasCertifications" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AdvancedExplorer_pkey" PRIMARY KEY ("id")
);
