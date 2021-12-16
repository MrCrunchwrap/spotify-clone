import { LikedSongs, User } from "@prisma/client";
import GradientLayout from "../components/gradientLayout";
import SongTable from "../components/songsTable";
import { validateToken } from "../lib/auth";
import prisma from "../lib/prisma";

const getBGColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const LikedSongs = ({ songs }: { songs: LikedSongs }) => {
  const color = getBGColor(songs.id);

  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export default LikedSongs;
