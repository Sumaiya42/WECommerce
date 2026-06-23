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
                  alt="Begum Rokeya Rahman - President"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Begum Rokeya Rahman</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">PRESIDENT</p>
              <p className="text-gray-700 text-sm">
                Founder Director of North-Bengal Trade Forum with over 15 years of experience in women entrepreneurship development
              </p>
            </div>

            {/* Vice President */}
            <div className="text-center">
              <div className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/office-bearer-2.png"
                  alt="Shamima Ara - Vice President"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Shamima Ara</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">VICE PRESIDENT</p>
              <p className="text-gray-700 text-sm">
                Leading export-oriented enterprise with expertise in international trade and market expansion for women-led businesses
              </p>
            </div>

            {/* Secretary General */}
            <div className="text-center">
              <div className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]">
                <Image
                  src="/office-bearer-3.png"
                  alt="Dr. Nusrat Jahan - Secretary General"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-2">Dr. Nusrat Jahan</h3>
              <p className="text-[#D4AF37] font-bold text-lg mb-3">SECRETARY GENERAL</p>
              <p className="text-gray-700 text-sm">
                Healthcare entrepreneur with passion for capacity building and policy advocacy for women entrepreneurs
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
            {/* Director 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Fatima Khanum</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Textile entrepreneur & policy advocate with 12 years in garment manufacturing
              </p>
            </div>

            {/* Director 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Rukhsana Begum</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Agro-processing expert specializing in value-added food product development
              </p>
            </div>

            {/* Director 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Nasrin Akhter</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Handicraft entrepreneur promoting traditional Bogura pottery globally
              </p>
            </div>

            {/* Director 4 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Yasmin Sultana</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                IT entrepreneur and digital literacy trainer for rural women businesses
              </p>
            </div>

            {/* Director 5 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Sadia Khan</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Retail business owner and financial literacy program coordinator
              </p>
            </div>

            {/* Director 6 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#F5F5F5]">
                <div className="w-full h-full flex items-center justify-center text-4xl">👩‍💼</div>
              </div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-1">Maliha Rahman</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-3">BOARD DIRECTOR</p>
              <p className="text-gray-700 text-xs">
                Tour & travel agency owner and export promotion council member
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}