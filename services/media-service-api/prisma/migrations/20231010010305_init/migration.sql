-- CreateTable
CREATE TABLE "Media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    CONSTRAINT "Media_type_fkey" FOREIGN KEY ("type") REFERENCES "MediaType" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaType" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "Media_title_key" ON "Media"("title");

-- CreateIndex
CREATE UNIQUE INDEX "MediaType_name_key" ON "MediaType"("name");
