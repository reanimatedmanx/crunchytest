import { MediaItem, MediaItemProps } from '../MediaItem'
import { List } from '../../../shared/components/List'
import { Box } from '@radix-ui/themes'

export const MediaList: React.FC = () => {
  // Get this from MobX
  const list: MediaItemProps[] = [
    ...new Array(100).fill({
      title: 'One Piece',
      releaseYear: 1999,
    }),
  ]

  return (
    <Box>
      <List
        items={list.map((item) => (
          <MediaItem {...item} />
        ))}
      />
    </Box>
  )
}
