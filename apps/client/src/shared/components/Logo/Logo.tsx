import { Link } from '@radix-ui/themes';
import styles from './Logo.module.css';

/**
 * TODO
 * 1. Switch to vite
 * 2. Enable TS path aliases
 * 3. Import @manifest JSON here
 * 4. Grab `friendlyName`and use it
 */
export const Logo: React.FC = () => (
  <Link
    href={window.origin}
    className={styles.link}
    color="orange"
    style={{ cursor: 'pointer' }}
  >
    CRUNCHYTEST
  </Link>
);

// #region Meta

Logo.displayName = 'Logo';

// #endregion
