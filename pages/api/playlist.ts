import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });

  res.json(playlists);
});

// let user;
//   try {
//     user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
//   } catch (error) {
//     return {
//       path: "/signin",
//     };
//   }
//   const [playlist] = await prisma.playlist.findMany({
//     where: {
//       id: Number(query.id),
//       userId: user.id,
//     },
//     include: {
//       songs: {
//         include: {
//           artist: {
//             select: {
//               name: true,
//               id: true,
//             },
//           },
//           usersLiked: true,
//         },
//       },
//     },
//   });

//   const newPlaylist = {
//     ...playlist,
//     songs: playlist.songs.map((song) => ({
//       ...song,
//       liked: song.usersLiked
//         .map((userLiked) => userLiked.userId)
//         .includes(user.id),
//     })),
//   };
