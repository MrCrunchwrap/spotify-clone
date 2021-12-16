import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/auth";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const likedSongs = await prisma.songsLikedByUsers.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        likedAt: "asc",
      },
    });

    res.json(likedSongs);
  }
);
