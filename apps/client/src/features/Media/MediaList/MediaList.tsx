import { MediaItem } from "../MediaItem";
import { List } from "../../../shared/components/List";

export const MediaList: React.FC = () => {
  // Get this from MobX
  const list: number[] = [...new Array(100)];

  return (
    <List
      items={list.map(() => (
        <MediaItem />
      ))}
    />
  );
};
