import { Box, Flex, Text } from "@chakra-ui/layout";
import Player from "./player";
import { useStoreState } from "easy-peasy";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);

  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <Box padding="20px" color="white" width="30%">
            <Text>Song name</Text>
            <Text>Artist name</Text>
          </Box>
        ) : null}
        <Box padding="20px" color="white" width="40%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
        <Box padding="20px" color="white" width="30%">
          <Text>Other controls</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
