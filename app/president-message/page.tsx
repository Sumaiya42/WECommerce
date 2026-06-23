import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Image from 'next/image'

export const metadata = {
  title: 'President\'s Message - BWCCI',
  description: 'Message from the President of Bogura Women Chamber of Commerce and Industry',
}

export default function PresidentMessagePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">President&apos;s Message</h1>
          <p className="text-gray-200">Home &gt; About Us &gt; President&apos;s Message</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* President Info & Image */}
          <div className="flex flex-col items-center">
            <div className="w-full h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/president.png"
                alt="Begum Rokeya Rahman - President BWCCI"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-1">Begum Rokeya Rahman</h3>
            <p className="text-[#D4AF37] font-semibold text-sm mb-4">PRESIDENT, BWCCI BOGURA</p>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• Founder Director, North-Bengal Trade Forum</p>
              <p>• Executive Committee Member, FBCCI</p>
              <p>• Dedicated to social & economic welfare since 2012</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white border-4 border-[#8B1538] rounded-2xl p-8">
              <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">
                &quot;Unlocking the Business Potential of Women in Bogura&quot;
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong>Dear Friends, Members, and Entrepreneurs,</strong>
                </p>

                <p>
                  It is my distinct privilege to welcome you to the online portal of the Bogura Women Chamber of Commerce and Industry (BWCCI). As President, I am continually inspired by the resilience, creativity, and drive of our district&apos;s women entrepreneurs. From rural household boutique artisans to urban service sector leaders, women are actively reshaping the commercial landscape of Bogura.
                </p>

                <p>
                  However, we are fully aware that female business owners face unique institutional challenges—namely, limited access to commercial banking capital, gaps in digital literacy, and the struggle to establish direct links with mainstream buyers. BWCCI was established to bridge these gaps. We work tirelessly to bring collateral-free SME credit, capacity-building workshops, and trade—representation directly to our doorstep.
                </p>

                <p>
                  Our collaboration with national bodies like the Federation of Bangladesh Chambers of Commerce and Industry (FBCCI) ensures that the voices of Bogura&apos;s women are heard at the highest levels of policymaking. In the coming years, our focus will remain on the digitization of micro-enterprises, agro-processing value addition, and trade facilitation.
                </p>

                <p>
                  I invite every woman business owner in Bogura—whether you run a small home boutique, a food business, an IT start-up, or a handicraft outlet—to join hands with us. Let us collaborate, learn, and grow together, building a stronger and more inclusive national economy.
                </p>

                <p>
                  <strong>Sincerely,</strong>
                </p>

                <p>
                  <strong>Begum Rokeya Rahman</strong><br />
                  <span className="text-gray-600">President, Bogura Women Chamber of Commerce & Industry (BWCCI)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}