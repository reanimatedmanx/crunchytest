import { Button, Flex } from '@radix-ui/themes'
import { EraserIcon } from '@radix-ui/react-icons'
import { Input } from '../../../shared/components/Input'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AppStore } from '../../../shared/stores'
import { useDebouncedState } from '../../../shared/hooks'
import { Select } from '../../../shared/components/Select'
import { FILTER_BY_TYPE } from '../../../shared/constants'

export const MediaFilterBar: React.FC = () => {
  const initialized = useRef(false)
  const { uiStore } = useContext(AppStore)
  const [mediaTitle, setMediaTitle] = useDebouncedState(null)
  const [mediaType, setMediaType] = useState<string | null>(null)

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setMediaTitle(event.currentTarget.value)
    },
    [setMediaTitle],
  )

  const handleFilter = useCallback(
    (value: string) => {
      setMediaType(value)
    },
    [setMediaType],
  )

  const handleReset = useCallback(() => {
    setMediaTitle(null)
    setMediaType(null)
  }, [setMediaTitle, setMediaType])

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      return
    }

    if (initialized && [mediaTitle, mediaType].some((v) => v !== null)) {
      uiStore.requestSearchMedia({
        page: 0,
        size: 100,
        title: mediaTitle,
        type: mediaType,
      })
    }
  }, [uiStore, mediaTitle, mediaType])

  return (
    <Flex
      direction={{
        initial: 'column',
        sm: 'row',
      }}
      justify="between"
      gap="5"
      align={{
        initial: 'stretch',
        sm: 'baseline',
      }}
    >
      <Input placeholder="What are you looking for?" onChange={handleSearch} />
      <Flex
        justify={{
          initial: 'start',
          sm: 'between',
        }}
        gap="5"
        align="baseline"
      >
        <Select
          items={FILTER_BY_TYPE}
          value={mediaType}
          variant="soft"
          placeholder="Filter By Type"
          onValueChange={handleFilter}
        />
        <Button onClick={handleReset}>
          <EraserIcon />
          <Flex
            display={{
              initial: 'none',
              md: 'inline-flex',
            }}
          >
            Reset
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}

// #region Meta

MediaFilterBar.displayName = 'MediaFilterBar'

// #endregion
