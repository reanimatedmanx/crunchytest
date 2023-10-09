import { Flex, Box } from '@radix-ui/themes'

interface ListProps {
  items: React.ReactElement[]
  fallback?: React.ReactElement
}

export const List: React.FC<ListProps> = ({
  items,
  fallback = <Box>List is empty</Box>,
}: ListProps) => {
  if (items.length === 0) {
    return fallback
  }

  return (
    <Flex direction="column" gap="5">
      {items}
    </Flex>
  )
}

// #region Meta

List.displayName = 'List'

// #endregion
