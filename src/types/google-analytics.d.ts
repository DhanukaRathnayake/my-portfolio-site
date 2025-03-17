// google-analytics.d.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};
