import styles from './Input.module.css'
import { InputHTMLAttributes } from 'react'

export const Input: React.FC<InputHTMLAttributes<any>> = (props) => (
  <input {...props} className={styles.input} />
)

// #region Meta

Input.displayName = 'Input'

// #endregion
