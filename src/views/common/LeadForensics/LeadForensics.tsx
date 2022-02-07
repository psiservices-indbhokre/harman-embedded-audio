import { useEffect } from 'react';

export function LeadForensincs() {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = 'https://secure.leadforensics.com/js/129300.js';
    document.head.appendChild(scriptTag);
    return () => {
      document.head.removeChild(scriptTag);
    }
  });
  return null;
}