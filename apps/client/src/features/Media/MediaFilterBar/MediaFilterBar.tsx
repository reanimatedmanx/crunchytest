import { Button, Flex } from '@radix-ui/themes'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Input } from '../../../shared/components/Input'

export const MediaFilterBar: React.FC = () => {
  return (
    <Flex justify="between" gap="5">
      <Input placeholder="What are you looking for?" />

      <Button>
        <HamburgerMenuIcon /> Menu
      </Button>
    </Flex>
  )
}

// #region Meta

MediaFilterBar.displayName = 'MediaFilterBar'

// #endregion
