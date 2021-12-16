import { useRouter } from "next/router";
import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import { usePlaylistById } from "../../lib/hooks";
import prisma from "../../lib/prisma";

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

const Playlist = () => {
  const router = useRouter();
  const { id } = router.query;
  const { playlist, isLoading } = usePlaylistById(id);
  const color = getBGColor(playlist.id);

  if (isLoading) return null;

  if (playlist.songs.length) {
    console.log(playlist);
    return (
      <GradientLayout
        color={color}
        roundImage={false}
        title={playlist.name}
        subtitle="playlist"
        description={`${playlist?.songs?.length} songs`}
        image={`https://picsum.photos/400?random=${playlist.id}`}
      >
        <SongTable songs={playlist.songs} />
      </GradientLayout>
    );
  }
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: { id: query.id },
  };
};

export default Playlist;
