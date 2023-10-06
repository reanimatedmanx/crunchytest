import { Box } from "@radix-ui/themes";
import { MediaItem } from "../MediaItem";

export const MediaList: React.FC = () => {
  // Get this from MobX
  const list: number[] = [...new Array(100)];

  return (
    <Box>
      {list.map(() => (
        <MediaItem />
      ))}
    </Box>
  );
};
