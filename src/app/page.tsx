import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Section - Left */}
            <a 
              href="https://studio.ubah.app/"
              className="order-1 md:order-1 group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative aspect-[3/4] w-full">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-50">
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-gray-900">ชาย</h2>
                  </div>
                </div>
              </div>
            </a>

            {/* Women's Section - Middle */}
            <a 
              href="https://studio.ubah.app/create-your-custom-thobe-women/"
              className="order-2 md:order-2 group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative aspect-[3/4] w-full">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-50">
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-gray-900">หญิง</h2>
                  </div>
                </div>
              </div>
            </a>

            {/* Children's Section - Right */}
            <a 
              href="https://studio.ubah.app/create-your-custom-thobe-child/"
              className="order-3 md:order-3 group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative aspect-[3/4] w-full">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Image
                    src="/child.png"
                    alt="เด็ก"
                    width={300}
                    height={400}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-50">
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-gray-900">เด็ก</h2>
                  </div>
                </div>
              </div>
            </a>
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
  );
}