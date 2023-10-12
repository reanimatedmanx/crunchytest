import { Select as RadixSelect } from '@radix-ui/themes'
import styles from './Select.module.css'

export interface SelectProps {
  items: { label: string; value: string }[]
  placeholder?: string
}

export const Select: React.FC<SelectProps> = ({
  items,
  placeholder = '...',
}) => (
  <RadixSelect.Root name="type">
    <RadixSelect.Trigger
      variant="surface"
      placeholder={placeholder}
      className={styles.selectTrigger}
    />
    <RadixSelect.Content variant="soft">
      {items.map(({ label, value }) => (
        <RadixSelect.Item value={value}>{label}</RadixSelect.Item>
      ))}
    </RadixSelect.Content>
  </RadixSelect.Root>
)

// #region Meta

Select.displayName = 'Select'

// #endregion
