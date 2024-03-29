import React, { useCallback, useContext, useState } from 'react'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import styles from './MediaForm.module.css'
import { Button, Dialog, Flex, Strong } from '@radix-ui/themes'
import { AddMediaButton } from '../shared'
import { DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'
import { Input, Select } from '../../../shared/components'
import { AppStore } from '../../../shared/stores'
import { FILTER_BY_TYPE } from '../../../shared/constants'

export const MediaForm: React.FC = () => {
  const { uiStore } = useContext(AppStore)
  const [uiMediaType, setUiMediaType] = useState('')

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const target = e.target as typeof e.target & {
        title: { value: string }
        type: { value: 'game' | 'tv-show' | 'movie' }
        genre: { value: string }
        rating: { value: string }
        releaseYear: { value: string }
      }

      uiStore.requestCreateMedia({
        title: target?.title.value,
        type: target?.type.value,
        genre: target?.genre.value,
        rating: Number(target?.rating.value),
        releaseYear: Number(target?.releaseYear.value),
      })
    },
    [uiStore],
  )

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <AddMediaButton />
      </Dialog.Trigger>
      <DialogPortal>
        <DialogOverlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Flex direction="column" gap="2">
            <Dialog.Title className={styles.title}>
              🥰 Add new media
            </Dialog.Title>
            <Dialog.Description className={styles.description}>
              Add any media type your soul desires.
            </Dialog.Description>
          </Flex>
          <form onSubmit={handleFormSubmit}>
            <Flex direction="column" gap="4" mt="5">
              <fieldset className={styles.fieldSet}>
                <label className={styles.label} htmlFor="title">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="..."
                  defaultValue=""
                />
              </fieldset>
              <fieldset className={styles.fieldSet}>
                <label className={styles.label} htmlFor="type">
                  Type
                </label>
                <Select
                  value={uiMediaType}
                  items={FILTER_BY_TYPE}
                  onValueChange={setUiMediaType}
                />
              </fieldset>
              <fieldset className={styles.fieldSet}>
                <label className={styles.label} htmlFor="genre">
                  Genre
                </label>
                <Input
                  id="genre"
                  name="genre"
                  placeholder="..."
                  defaultValue=""
                />
              </fieldset>
              <fieldset className={styles.fieldSet}>
                <label className={styles.label} htmlFor="release-year">
                  Release Year
                </label>
                <Input
                  id="release-year"
                  name="releaseYear"
                  placeholder="..."
                  defaultValue=""
                />
              </fieldset>
              <fieldset className={styles.fieldSet}>
                <label className={styles.label} htmlFor="rating">
                  Rating
                </label>
                <Input
                  id="rating"
                  name="rating"
                  placeholder="..."
                  defaultValue=""
                />
              </fieldset>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="solid" color="gray">
                  <Strong>Cancel</Strong>
                </Button>
              </Dialog.Close>
              <Button type="submit">
                <BookmarkFilledIcon />
                <Strong>Create</Strong>
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </DialogPortal>
    </Dialog.Root>
  )
}
