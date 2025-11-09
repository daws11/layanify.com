import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(eventName: string, payload: Record<string, any> = {}): void {
  try {
    // GA4 / GTM dataLayer
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: eventName,
        ...payload
      });
    }
  } catch (_e) {
    // no-op
  }
  if (typeof console !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('[trackEvent]', eventName, payload)
  }
}
