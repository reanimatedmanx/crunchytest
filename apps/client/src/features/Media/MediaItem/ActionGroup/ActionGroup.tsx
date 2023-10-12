import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { Flex, Button, Strong, AlertDialog } from '@radix-ui/themes'
import styles from './ActionGroup.module.css'
import { useCallback, useContext } from 'react'
import { AppStore } from '../../../../shared/stores'

export interface ActionGroupProps {
  mediaId: string
  hovered?: boolean
}

export const ActionGroup: React.FC<ActionGroupProps> = ({
  mediaId,
  hovered,
}) => {
  const { uiStore } = useContext(AppStore)

  const handleDeleteClick = useCallback(() => {
    uiStore.requestDeleteMedia(mediaId)
  }, [mediaId, uiStore])

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
        <AlertDialog.Root>
          <AlertDialog.Trigger>
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
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>⚠️ Remove media</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure? This is a destructive operation and it's not
              possible to revert the deleted media.
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  <Strong>No, Cancel</Strong>
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action onClick={handleDeleteClick}>
                <Button variant="solid" color="red">
                  <Strong>Yes, Delete</Strong>
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Flex>
    </Flex>
  )
}
