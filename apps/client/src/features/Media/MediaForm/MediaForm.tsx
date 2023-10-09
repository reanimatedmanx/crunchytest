import React from 'react'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import styles from './MediaForm.module.css'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import { AddMediaButton } from '../shared'
import { DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'
import { Input } from '../../../shared/components/Input'

export const MediaForm: React.FC = () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <AddMediaButton />
    </Dialog.Trigger>
    <DialogPortal>
      <DialogOverlay className={styles.overlay} />
      <Dialog.Content className={styles.content}>
        <Flex direction="column" gap="2">
          <Dialog.Title className={styles.title}>🥰 Add new media</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Add any media type your soul desires.
          </Dialog.Description>
        </Flex>
        <Flex direction="column" gap="4" mt="5">
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="title">
              Title
            </label>
            <Input id="title" placeholder="..." defaultValue="" />
          </fieldset>
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="type">
              Type
            </label>
            <Input id="type" placeholder="..." defaultValue="" />
          </fieldset>
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="genre">
              Genre
            </label>
            <Input id="genre" placeholder="..." defaultValue="" />
          </fieldset>
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="release-year">
              Release Year
            </label>
            <Input id="release-year" placeholder="..." defaultValue="" />
          </fieldset>
          <fieldset className={styles.fieldSet}>
            <label className={styles.label} htmlFor="rating">
              Rating
            </label>
            <Input id="rating" placeholder="..." defaultValue="" />
          </fieldset>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="surface" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>
              <BookmarkFilledIcon />
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </DialogPortal>
  </Dialog.Root>
)
