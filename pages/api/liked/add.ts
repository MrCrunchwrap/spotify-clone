import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/auth";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { song } = req.body;
    const likedSongs = await prisma.user.update<{
      where: { id: number };
      data: any;
    }>({
      where: { id: user.id },
      data: {
        likedSongs: {
          create: { songId: song.id },
        },
      },
    });

    res.json(likedSongs);
  }
);
