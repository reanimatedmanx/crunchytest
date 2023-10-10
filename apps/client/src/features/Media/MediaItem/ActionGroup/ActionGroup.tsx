import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { Flex, Button, Strong } from '@radix-ui/themes'
import styles from './ActionGroup.module.css'

export interface ActionGroupProps {
  hovered?: boolean
}

export const ActionGroup: React.FC<ActionGroupProps> = ({ hovered }) => {
  return (
    <Flex
      display={{
        initial: 'flex',
        lg: hovered ? 'flex' : 'none',
      }}
      className={styles.actionGroup}
    >
      <Flex gap="2">
        <Button color="gray">
          <Pencil2Icon />
          <Flex
            display={{
              initial: 'none',
              md: 'inline-flex',
            }}
          >
            <Strong>Edit</Strong>
          </Flex>
        </Button>
        <Button color="red">
          <TrashIcon />
          <Flex
            display={{
              initial: 'none',
              md: 'inline-flex',
            }}
          >
            <Strong>Delete</Strong>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
