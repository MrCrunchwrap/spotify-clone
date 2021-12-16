import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/auth";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const [playlist] = await prisma.playlist.findMany({
      where: {
        id: Number(req.query.id),
        userId: user.id,
      },
      include: {
        songs: {
          include: {
            artist: {
              select: {
                name: true,
                id: true,
              },
            },
            usersLiked: true,
          },
        },
      },
    });

    const newPlaylist = {
      ...playlist,
      songs: playlist.songs.map((song) => ({
        ...song,
        liked: song.usersLiked
          .map((userLiked) => userLiked.userId)
          .includes(user.id),
      })),
    };

    res.json(newPlaylist);
  }
);
