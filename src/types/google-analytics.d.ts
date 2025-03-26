// Type definitions for Google Analytics gtag
interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  non_interaction?: boolean;
  [key: string]: any;
}

interface WindowWithGtag extends Window {
  gtag: (
    command: 'event' | 'config' | 'set' | 'js' | 'consent',
    targetOrAction: string | Date,
    params?: {
      send_to?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
      non_interaction?: boolean;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}

declare global {
  interface Window {
    gtag: WindowWithGtag['gtag'];
    dataLayer: WindowWithGtag['dataLayer'];
  }
}

export {}; 