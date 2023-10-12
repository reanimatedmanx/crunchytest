import { Button, Flex } from '@radix-ui/themes'
import styles from './AddMediaButton.module.css'
import { RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export const AddMediaButton: React.FC = React.forwardRef((props) => (
  <Button className={styles.button} {...props}>
    <RocketIcon />
    <Flex
      display={{
        initial: 'none',
        md: 'inline-flex',
      }}
    >
      Add media
    </Flex>
  </Button>
))

// #region Meta

AddMediaButton.displayName = 'AddMediaButton'

// #endregion
