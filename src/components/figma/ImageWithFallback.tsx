import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallback = '/placeholder.jpg',
  className = ''
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
