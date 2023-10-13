import { Flex } from '@radix-ui/themes'
import { MediaItem } from '../MediaItem'
import { List } from '../../../shared/components'
import { useContext, useMemo } from 'react'
import { AppStore } from '../../../shared/stores'
import { observer } from 'mobx-react'
import { NoData } from './NoData'
import { AppState } from '../../../shared/enums'
import { MediaApiState } from '../../../shared/enums'

export const MediaList: React.FC = observer(() => {
  const store = useContext(AppStore)

  const isReady = useMemo(
    () =>
      store.state === AppState.Ready &&
      store.mediaStore.state === MediaApiState.Ready,
    [store.state, store.mediaStore.state],
  )

  if (!isReady) {
    // TODO: Add a nice animation or smth.
    return <Flex></Flex>
  }

  return (
    <List
      items={store.mediaStore.mediaList.map((m) => (
        <MediaItem
          key={m.id}
          id={m.id}
          title={m.title}
          type={m.type}
          genre={m.genre}
          rating={m.rating}
          releaseYear={m.releaseYear}
        />
      ))}
      fallback={<NoData />}
    />
  )
})
