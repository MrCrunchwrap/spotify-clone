import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { song } = req.body;
    const likedSongs = await prisma.songsLikedByUsers.delete({
      where: { songId_userId: { songId: song.id, userId: user.id } },
    });

    res.json(likedSongs);
  }
);
