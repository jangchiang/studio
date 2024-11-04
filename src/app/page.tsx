'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import UltimateLoading from '../components/UltimateLoading';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <UltimateLoading />
      <div className={`min-h-screen flex flex-col bg-white ${isLoaded ? 'zoom-in' : 'opacity-0'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="https://ubah.app" className="hover:opacity-90 transition-opacity">
                  <Image 
                    src="/logo.svg"
                    alt="UBAH Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              <nav>
                <a 
                  href="https://ubah.app" 
                  className="text-gray-600 hover:text-gray-900"
                >
                  ร้านค้าหลัก
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Text */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">เลือกสไตล์ของคุณ</h1>
              <p className="text-lg text-gray-600">ออกแบบชุดที่เหมาะกับคุณ</p>
            </div>

            {/* Categories Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Men's Section */}
                <a 
                  href="https://studio.ubah.app/th/"
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="relative aspect-[3/4] w-full bg-gray-50">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Image
                        src="/man.png"
                        alt="ชาย"
                        width={300}
                        height={400}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-100/70">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">ชาย</h2>
                        <p className="mt-2 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          เลือกดูคอลเลคชันสำหรับผู้ชาย
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Women's Section */}
                <a 
                  href="https://studio.ubah.app/th/create-your-custom-thobe-women/"
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="relative aspect-[3/4] w-full bg-gray-50">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Image
                        src="/woman.png"
                        alt="หญิง"
                        width={300}
                        height={400}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-100/70">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">หญิง</h2>
                        <p className="mt-2 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          เลือกดูคอลเลคชันสำหรับผู้หญิง
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center items-center">
              <Image 
                src="/logo.svg"
                alt="UBAH Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="mt-4 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} UBAH. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}