import { Select as RadixSelect } from '@radix-ui/themes'
import styles from './Select.module.css'

export interface SelectProps {
  items: { label: string; value: string }[]
  value?: string | null
  placeholder?: string
  variant?: 'surface' | 'classic' | 'soft' | 'ghost'
  onValueChange?: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({
  items,
  placeholder = '...',
  variant = 'surface',
  value,
  onValueChange,
}) => (
  <RadixSelect.Root
    name="type"
    value={value || ''}
    onValueChange={onValueChange}
  >
    <RadixSelect.Trigger
      variant={variant}
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
