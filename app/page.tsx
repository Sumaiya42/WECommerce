import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4A] text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Empowering Women, Transforming Economy
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
            Building stronger, more inclusive business opportunities for women entrepreneurs across Bogura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="w-full sm:w-auto bg-[#D4AF37] text-[#8B1538] px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="w-full sm:w-auto border-2 border-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#8B1538] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#8B1538] mb-6">
              Supporting Women&apos;s Leadership
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Bogura Women Chamber of Commerce and Industry (BWCCI) is dedicated to fostering an inclusive business environment where women entrepreneurs can thrive, connect, and grow.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through capacity building, policy advocacy, and market linkages, we empower hundreds of women-led enterprises to compete in both domestic and international markets.
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-8 border-4 border-[#D4AF37]">
            <div className="text-center">
              <div className="inline-block bg-[#8B1538] text-white rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="font-playfair text-4xl font-bold">100+</div>
                  <div className="text-sm">Active Members</div>
                </div>
              </div>
              <p className="text-[#8B1538] font-semibold">Join our growing network of women entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-playfair text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <p className="text-gray-200">Active Members</p>
            </div>
            <div>
              <div className="font-playfair text-5xl font-bold text-[#D4AF37] mb-2">15</div>
              <p className="text-gray-200">Committees</p>
            </div>
            <div>
              <div className="font-playfair text-5xl font-bold text-[#D4AF37] mb-2">25+</div>
              <p className="text-gray-200">Events Yearly</p>
            </div>
            <div>
              <div className="font-playfair text-5xl font-bold text-[#D4AF37] mb-2">1000+</div>
              <p className="text-gray-200">Entrepreneurs Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#8B1538] mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white border-2 border-[#8B1538] rounded-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Policy Advocacy</h3>
            <p className="text-gray-700">
              Advocating for gender-friendly business policies, trade regulations, and financial incentives for women entrepreneurs at district and national levels.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white border-2 border-[#8B1538] rounded-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Capacity Building</h3>
            <p className="text-gray-700">
              Offering workshops on digital marketing, financial literacy, product development, export procedures, and business management for sustained growth.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white border-2 border-[#8B1538] rounded-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Market Expansion</h3>
            <p className="text-gray-700">
              Facilitating trade fairs, product exhibitions, and buyer-seller connections to help women entrepreneurs reach local, national, and international markets.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#8B1538] mb-12 text-center">Mission & Vision</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white border-l-4 border-[#8B1538] p-8 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="font-playfair text-2xl font-bold text-[#8B1538]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To promote, encourage, and secure a favorable economic climate for women entrepreneurs in Bogura by delivering capacity-building workshops, financial literacy initiatives, and policy-level advocacy. We strive to make women-led enterprises competitive in both domestic and international markets.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-l-4 border-[#D4AF37] p-8 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">👁️</div>
                <h3 className="font-playfair text-2xl font-bold text-[#8B1538]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To establish a gender-equal market environment in Bangladesh where women business owners are fully integrated into mainstream financial channels, hold prominent positions in trade bodies, and serve as leading drivers of national GDP development.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-16">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#8B1538] mb-8 text-center">Our Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded border-t-4 border-[#8B1538]">
                <p className="text-gray-700 text-sm"><strong>Inclusive Representation:</strong> Open to all women leaders, from rural weavers to corporate directors.</p>
              </div>
              <div className="bg-white p-6 rounded border-t-4 border-[#8B1538]">
                <p className="text-gray-700 text-sm"><strong>Capacity Development:</strong> Continuous skills updates in agro-tech, digital marketing, and export procedures.</p>
              </div>
              <div className="bg-white p-6 rounded border-t-4 border-[#8B1538]">
                <p className="text-gray-700 text-sm"><strong>Financial Linkage:</strong> Bridging gaps between banks and women entrepreneurs for collateral-free SME loans.</p>
              </div>
              <div className="bg-white p-6 rounded border-t-4 border-[#8B1538]">
                <p className="text-gray-700 text-sm"><strong>Trade Facilitation:</strong> Supporting exhibitions and market access for women-led enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events & Notices Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Events */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#D4AF37] p-6 rounded shadow">
                <h4 className="font-bold text-[#8B1538] mb-2">Winter Trade Fair 2026</h4>
                <p className="text-gray-600 text-sm">28 November 2026 | Bogura Exhibition Ground</p>
              </div>
              <div className="bg-white border-l-4 border-[#D4AF37] p-6 rounded shadow">
                <h4 className="font-bold text-[#8B1538] mb-2">Digital Marketing Workshop</h4>
                <p className="text-gray-600 text-sm">February 28 | BWCCI Headquarters</p>
              </div>
            </div>
          </div>

          {/* Notices */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Latest Notices</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-[#D4AF37] p-6 rounded shadow">
                <h4 className="font-bold text-[#8B1538] mb-2">Membership Drive 2026</h4>
                <p className="text-gray-600 text-sm">Join BWCCI today and enjoy exclusive benefits and networking opportunities.</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-[#D4AF37] p-6 rounded shadow">
                <h4 className="font-bold text-[#8B1538] mb-2">New Policy Updates</h4>
                <p className="text-gray-600 text-sm">Stay informed about the latest government initiatives for women entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}