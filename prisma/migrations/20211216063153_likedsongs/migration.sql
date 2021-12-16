-- CreateTable
CREATE TABLE "SongsLikedByUsers" (
    "songId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "likedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SongsLikedByUsers_pkey" PRIMARY KEY ("songId","userId")
);

-- AddForeignKey
ALTER TABLE "SongsLikedByUsers" ADD CONSTRAINT "SongsLikedByUsers_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongsLikedByUsers" ADD CONSTRAINT "SongsLikedByUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
