import { useState, useEffect } from 'react'

import { debounceTime } from 'rxjs/operators'
import { Subject } from 'rxjs'

export interface DebouncedInputConfig {
  debounceTimeMs: number
}

export const useDebouncedState = (
  initialValue: string | null,
  config?: DebouncedInputConfig,
): [string | null, (v: string | null) => void] => {
  const [value, setValue] = useState(initialValue)
  const [values] = useState(() => new Subject<string>())
  const debounceTimeMs = config?.debounceTimeMs || 500

  useEffect(() => {
    const subscription = values
      .pipe(debounceTime(debounceTimeMs))
      .subscribe(setValue)
    return () => subscription.unsubscribe()
  }, [debounceTimeMs, values])

  return [value, (v: string | null) => values.next(v || '')]
}
