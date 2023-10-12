import { MediaItem } from '../MediaItem'
import { List } from '../../../shared/components/List'
import { useContext } from 'react'
import { AppStore } from '../../../shared/stores'
import { observer } from 'mobx-react'
import { NoData } from './NoData'

export const MediaList: React.FC = observer(() => {
  const store = useContext(AppStore).mediaStore

  return (
    <List
      items={store.mediaList.map((m) => (
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
