import { Button, Flex, Strong } from '@radix-ui/themes'
import styles from './AddMediaButton.module.css'
import { RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export const AddMediaButton: React.FC = React.forwardRef((props) => (
  <Button className={styles.button} {...props} color="orange">
    <RocketIcon />
    <Flex
      display={{
        initial: 'none',
        md: 'inline-flex',
      }}
    >
      <Strong>Add media</Strong>
    </Flex>
  </Button>
))

// #region Meta

AddMediaButton.displayName = 'AddMediaButton'

// #endregion
