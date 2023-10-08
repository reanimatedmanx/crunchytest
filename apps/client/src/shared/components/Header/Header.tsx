import { Flex } from '@radix-ui/themes'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Flex justify="between" align="center">
    {children}
  </Flex>
)
