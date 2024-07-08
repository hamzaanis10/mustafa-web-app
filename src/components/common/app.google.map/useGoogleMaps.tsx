import { useEffect, useState } from 'react';

type UseGoogleMapsReturn = boolean;

const useGoogleMaps = (apiKey: string): UseGoogleMapsReturn => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scriptId = 'google-maps-script';
    const src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

    if (document.getElementById(scriptId)) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = src;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (document.getElementById(scriptId)) {
        document.getElementById(scriptId)?.remove();
      }
    };
  }, [apiKey]);

  return isLoaded;
};

export default useGoogleMaps;
