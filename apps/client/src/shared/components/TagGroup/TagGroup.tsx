import { Badge, Flex, Strong } from '@radix-ui/themes'
import styles from './TagGroup.module.css'
import { ReactElement } from 'react'

export interface TagGroupProps {
  tags: ReactElement[] | string[]
}

export const TagGroup: React.FC<TagGroupProps> = ({ tags }) => (
  <Flex
    gap={{
      initial: '5',
      xs: '3',
    }}
    direction={{
      initial: 'column',
      xs: 'row',
    }}
  >
    {tags.map((t, index) => (
      <Badge
        key={`badge-${index}-${Date.now()}`}
        className={styles.badge}
        size="1"
        variant="solid"
        radius="full"
      >
        <Strong className={styles.badgeText}>{t}</Strong>
      </Badge>
    ))}
  </Flex>
)

// #region Meta

TagGroup.displayName = 'TagGroup'

// #endregion
