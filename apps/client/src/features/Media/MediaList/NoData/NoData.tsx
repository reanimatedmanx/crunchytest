import { Flex, Heading, Text } from '@radix-ui/themes'
import styles from './NoData.module.css'

export const NoData: React.FC = () => (
  <Flex className={styles.root} pt="9" align="center" direction="column">
    <Heading className={styles.heading}>🤔 Media list is empty</Heading>
    <Text className={styles.text}>
      Try adding new media or changing the search criteria.
    </Text>
    <img
      className={styles.image}
      src="images/no-data.svg"
      alt="Representing lack of media content in the list, showing a man searching for something in an empty directory"
    />
  </Flex>
)
