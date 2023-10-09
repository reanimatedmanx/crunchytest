import {
  Flex,
  Card,
  Inset,
  Text,
  Strong,
  Heading,
  Badge,
  Button,
} from '@radix-ui/themes'
import styles from './MediaItem.module.css'

// TODO: Extend this interface from a shared, API SDK generated model,
// ? or a protobuf generated one.
export interface MediaItemProps {
  title: string
  releaseYear: number
}

export const MediaItem: React.FC<MediaItemProps> = ({
  title,
  releaseYear,
}: MediaItemProps) => {
  return (
    <Card size="2" className={styles.card}>
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
            <Heading as="h2">{title}</Heading>
            <Heading as="h3">{releaseYear}</Heading>
            <Text as="p" size="3">
              {/* ? TODO: Extend schema to provide `description` field */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              corrupti obcaecati.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" justify="between">
          {/* TODO: Extract to `Tags` */}
          <Flex gap="2">
            <Badge size="1">
              <Strong>Tag 1</Strong>
            </Badge>
            <Badge size="1">
              <Strong>Tag 2</Strong>
            </Badge>
            <Badge size="1">
              <Strong>Tag 3</Strong>
            </Badge>
          </Flex>
          <Flex gap="2">
            <Button color="gray">Edit</Button>
            <Button color="red">Delete</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}
