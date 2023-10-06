-- CreateTable
CREATE TABLE "Media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Media_title_key" ON "Media"("title");
