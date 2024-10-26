// components/UltimateLoading.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

const UltimateLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <div className="wave h-64" />
          <div className="wave h-64" style={{ animationDelay: '0.2s', opacity: 0.5 }} />
          <div className="wave h-64" style={{ animationDelay: '0.4s', opacity: 0.3 }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">


        {/* Rotating Cube with Logo */}
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-face front">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
            <div className="cube-face back">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
            <div className="cube-face right">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
            <div className="cube-face left">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
            <div className="cube-face top">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
            <div className="cube-face bottom">
              <Image src="/logo.svg" alt="UBAH" width={80} height={80} />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 animate-pulse relative z-10">กำลังโหลด...</p>
        </div>
      </div>
    </div>
  );
};

export default UltimateLoading;