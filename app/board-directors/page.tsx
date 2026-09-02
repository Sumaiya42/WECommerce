import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Image from 'next/image'

export const metadata = {
  title: 'Board of Directors - BWCCI',
  description: 'Meet the leadership and board of directors of Bogura Women Chamber of Commerce and Industry',
}

export default function BoardDirectorsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Board of Directors</h1>
          <p className="text-gray-200">Home &gt; About Us &gt; Board of Directors</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Chamber Office Bearers */}
        <div className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-12 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Chamber Office Bearers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* President */}
            <div className="text-center">
              <div className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/president.png"
                  alt="Nazma Sultana - President"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Nazma Sultana</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">PRESIDENT</p>
              <p className="text-gray-700 text-sm">
                Founder & owner of Jabin's Collection with over 16 years of experience in women entrepreneurship development
              </p>
            </div>

            {/* Vice President */}
            <div className="text-center">
              <div className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/Sadika Nasim Banu.jpeg"
                  alt="Sadika Nasim Banu - Senior Vice President"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Sadika Nasim Banu</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">SENIOR VICE PRESIDENT</p>
              <p className="text-gray-700 text-sm">
                Founder & Owner of Arora Business Management, Shova Enterprise, and Matching
              </p>
            </div>

            {/* VICE PRESIDENT */}
            <div className="text-center">
              <div className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/Labiba Anjum.jpeg"
                  alt="Labiba Anjum - Senior Vice President"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Labiba Anjum</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">VICE PRESIDENT</p>
              <p className="text-gray-700 text-sm">
                Managing Director Premium Cars & Automobile's Ltd
              </p>
            </div>
          </div>
        </div>

        {/* Board of Directors */}
        <div>
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-12 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Board Directors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Director 1 - Sultana Parvin */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Sultana Parvin.jpeg"
                  alt="MST. Sultana Parvin - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">MST. Sultana Parvin</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Haji Muhammad joynal abedin commerce college. Bogura shadar. Bogura
              </p>
            </div>

            {/* Director 2 - Sharmin Sultana  */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Sharmin Sultana.jpeg"
                  alt="Sharmin Sultana  - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Sharmin Sultana</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner Velveta Agro & Food
              </p>
            </div>

            {/* Director 3 - MST. Rina Parvin */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Rina Parvin.jpeg"
                  alt="MST. Rina Parvin - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">MST. Rina Parvin</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
               Owner of Anik Pharmacy
              </p>
            </div>

            {/* Director 4 - MST. Beauty Khatun */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Beauty Khatun.jpeg"
                  alt="MST. Beauty Khatun - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">MST. Beauty Khatun</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner of Expert
              </p>
            </div>

            {/* Director 5 - Afsana Azad */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Afsana Azad.jpeg"
                  alt="Sadia Khan - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Afsana Azad</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner of Vinnota
              </p>
            </div>

            {/* Director 6 - MST. Ayesha Siddika */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Ayesha Siddika.jpeg"
                  alt="MST. Ayesha Siddika  - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">MST. Ayesha Siddika </h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner of SB Collection
              </p>
            </div>

            {/* Director 7 - Esrat Karim */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Esrat Karim.jpeg"
                  alt="Esrat Karim - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Esrat Karim</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner of Amal Foundation
              </p>
            </div>

            {/* Director 8 - Sayeda Mantasha Alam */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <Image
                  src="/Sayeda Mantasha Alam.jpeg"
                  alt="Sayeda Mantasha Alam - Board Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Sayeda Mantasha Alam</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Owner of Aparajita International
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}