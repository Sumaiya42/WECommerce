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
        {/* President Info & Image - Top Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-64 h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/president.png"
              alt="Nazma Sultana - President BWCCI"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-1">Nazma Sultana</h3>
          <p className="text-[#D4AF37] font-semibold text-sm mb-4">PRESIDENT, BWCCI BOGURA</p>
          <div className="text-sm text-gray-700 space-y-2 text-center">
            <p>• Founder and Owner, Jabin's Collection</p>
          </div>
        </div>

        {/* Message Content - Bottom Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-[#8B1538] rounded-2xl p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">
              &quot;Unlocking the Business Potential of Women in Bogura&quot;
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Dear Friends, Members, and Entrepreneurs,</strong>
              </p>

              <p>
                Welcome to the official portal of the Bogura Women Chamber of Commerce and Industry (BWCCI). As President, I am deeply inspired every day by the ingenuity and determination of our local women entrepreneurs, whose ventures—from village-based craft studios to urban service enterprises—are transforming Bogura’s economy.
              </p>

              <p>
                Women in business often encounter distinct systemic obstacles, particularly in securing institutional financing, mastering digital tools, and connecting with major commercial markets. BWCCI exists to eliminate these barriers. We actively facilitate access to collateral-free SME funding, deliver practical skill-building programs, and create direct market pathways for our members.
              </p>

              <p>
                Through our strategic partnership with apex organizations like the FBCCI, we ensure that the perspectives and priorities of Bogura’s female entrepreneurs influence national policy. Moving forward, we are prioritizing the digital transformation of micro-enterprises, value addition in agro-processing, and expanded trade opportunities.
              </p>

              <p>
                I encourage every woman entrepreneur across Bogura—from home-based creators and food producers to tech founders and boutique owners—to join our network. Together, we can share knowledge, scale our businesses, and drive sustainable, inclusive economic growth.
              </p>

              <p>
                <strong>Sincerely,</strong>
              </p>

              <p>
                <strong>Nazma Sultana</strong><br />
                <span className="text-gray-600">President, Bogura Women Chamber of Commerce & Industry (BWCCI)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}