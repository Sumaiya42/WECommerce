import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Our Services - BWCCI',
  description: 'Comprehensive services for women entrepreneurs including policy advocacy, skill training, trade fairs, and business support',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Chamber Services</h1>
          <p className="text-gray-200">Home &gt; Services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-4 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Supporting Your Business Growth
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed max-w-3xl">
            BWCCI offers a wide range of targeted support programs tailored to help local women entrepreneurs start, run, and scale their businesses successfully. Below are the key services available to active members and local startup founders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service 1: Policy Advocacy */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">⚖️</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Policy Advocacy & Representation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We present policy suggestions to NBR, ministries, and banking regulators for low-interest loan lines, simplified taxation, and simplified licensing guidelines for women-owned small enterprises.
              </p>
            </div>
          </div>

          {/* Service 2: Skill Development */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">🎓</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Skill Development Workshops
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chamber hosts continuous classes on sewing and handicraft quality control, agro-product processing, packaging, digital bookkeeping, and setting up social commerce shops.
              </p>
            </div>
          </div>

          {/* Service 3: Trade Fairs */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">🎪</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Trade Fairs & Exhibition Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                BWCCI organizes local trade expos in Bogura district and coordinates subsidized pavilion space for our members to showcase products at national and international exhibitions.
              </p>
            </div>
          </div>

          {/* Service 4: Advisory & Registration */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">📝</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Advisory & Registration Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We guide startup founders through securing Trade Licenses, TIN/BIN registrations, commercial banking accounts, and getting trademark certifications for their brand names.
              </p>
            </div>
          </div>

          {/* Service 5: Recommendation Letters */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">📜</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Chamber Recommendation Letters
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We issue official recommendation and verification letters for bank loans, passport/visa clearances, trade license renewals, and export certifications.
              </p>
            </div>
          </div>

          {/* Service 6: Arbitration */}
          <div className="flex gap-6">
            <div className="text-5xl flex-shrink-0">🤝</div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-3">
                Arbitration & Dispute Settlement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our specialized wing provides a quick, low-cost alternative for resolving vendor, supplier, or property-lease disputes, preventing long and costly litigation.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 pt-16 border-t-2 border-gray-200">
          <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-12 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Additional Support Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Additional Service 1 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Business Mentorship</h3>
              <p className="text-gray-700 text-sm">
                One-on-one mentorship from experienced business leaders to guide your entrepreneurial journey and strategic planning.
              </p>
            </div>

            {/* Additional Service 2 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Networking & B2B Events</h3>
              <p className="text-gray-700 text-sm">
                Regular networking sessions and buyer-seller meets to expand your business connections and partnerships.
              </p>
            </div>

            {/* Additional Service 3 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Financial Literacy Programs</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive training on financial management, accounting, loan applications, and banking procedures.
              </p>
            </div>

            {/* Additional Service 4 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Digital Skills Training</h3>
              <p className="text-gray-700 text-sm">
                Online marketing, e-commerce setup, social media management, and digital entrepreneurship training.
              </p>
            </div>

            {/* Additional Service 5 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Market Research & Analysis</h3>
              <p className="text-gray-700 text-sm">
                Access to market data, industry trends, competitor analysis, and growth opportunity identification.
              </p>
            </div>

            {/* Additional Service 6 */}
            <div className="bg-white border-2 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-[#8B1538] text-lg mb-3">Export Promotion Support</h3>
              <p className="text-gray-700 text-sm">
                Assistance with export documentation, international quality standards, and global market entry strategies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#8B1538] to-[#A61E4A] text-white p-12 rounded-lg text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="mb-6 text-gray-100">
            Join BWCCI today and access all these exclusive services designed to support your success.
          </p>
          <button className="bg-[#D4AF37] text-[#8B1538] px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition">
            Become a Member
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}