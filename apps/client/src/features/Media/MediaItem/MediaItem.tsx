import { Flex, Card, Inset, Text, Heading, Box } from '@radix-ui/themes'
import styles from './MediaItem.module.css'
import { Media } from '../../../shared/clients'
import { TagGroup } from '../../../shared/components/TagGroup/TagGroup'
import { useCallback, useMemo, useState } from 'react'
import { ActionGroup } from './ActionGroup'

// TODO: Extend this interface from a shared, API SDK generated model,
// ? or a protobuf generated one.
export interface MediaItemProps extends Media {}

export const MediaItem: React.FC<MediaItemProps> = ({
  id,
  title,
  type,
  genre,
  rating,
  releaseYear,
}: MediaItemProps) => {
  const decoratedRating = useMemo(() => {
    const decoration = {
      0: `💩`,
      1: ' 🌱',
      2: '🤐',
      3: '😖',
      4: '🫤',
      5: '🥱',
      6: '🥲',
      7: '😯',
      8: '😃',
      9: '🥰',
      10: '😍',
    }[rating]

    return `${decoration} ${rating}`
  }, [rating])
  const tags = useMemo(
    () =>
      [type, genre, decoratedRating].map((value) => {
        return <Box key={value}>{value}</Box>
      }),
    [type, genre, decoratedRating],
  )

  const [hovered, setHovered] = useState(false)

  const handleMouseOverlap = useCallback(() => {
    setHovered(!hovered)
  }, [hovered])

  return (
    <Card
      size="2"
      className={styles.card}
      onMouseEnter={handleMouseOverlap}
      onMouseLeave={handleMouseOverlap}
    >
      <Flex direction="column" gap="5">
        <Flex direction="row" gap="5">
          <Inset
            clip="padding-box"
            side="all"
            p="current"
            style={{
              minWidth: 120,
              maxWidth: 120,
              height: 120,
              maxHeight: 120,
            }}
          >
            {/* ? TODO: Extend schema to provide `thumbnailUrl` field to S3 Bucket */}
            <picture>
              <source srcSet="thumbnail.webp" type="image/webp" />
              <img
                src="thumbnail.jpg"
                alt="Thumbnail description"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </picture>
          </Inset>
          <Flex direction="column">
            <Heading as="h2" className={styles.cardTitle}>
              {title}
            </Heading>
            <Heading as="h3" className={styles.cardSubtitle}>
              {releaseYear}
            </Heading>
            <Text as="p" size="3" className={styles.cardDescription}>
              {/* ? TODO: Extend schema to provide `description` field */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              corrupti obcaecati.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" justify="between" style={{ minHeight: 40 }}>
          {tags ? <TagGroup tags={tags} /> : null}
          <ActionGroup mediaId={id} hovered={hovered} />
        </Flex>
      </Flex>
    </Card>
  )
}
