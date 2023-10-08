import { Button } from '@radix-ui/themes'
import styles from './AddMediaButton.module.css'
import { RocketIcon } from '@radix-ui/react-icons'

export const AddMediaButton: React.FC = () => (
  <Button className={styles.button}>
    <RocketIcon />
    Add media
  </Button>
)

// #region Meta

AddMediaButton.displayName = 'AddMediaButton'

// #endregion
