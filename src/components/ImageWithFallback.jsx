import { useState } from 'react';

export function ImageWithFallback({ src, alt, className, fallbackSrc }) {
  const [error, setError] = useState(false);

  const displaySrc = !error ? src : (fallbackSrc || 'https://via.placeholder.com/800x600?text=Image+Unavailable');

  return (
    <img
      src={displaySrc}
      alt={alt || ''}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

export default ImageWithFallback;
