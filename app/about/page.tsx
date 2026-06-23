import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Brief History & Chamber Profile - BWCCI',
  description: 'Learn about the history and profile of Bogura Women Chamber of Commerce and Industry',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Brief History & Chamber Profile</h1>
          <p className="text-gray-200">Home &gt; About Us &gt; Brief History</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-6 pb-4 border-b-4 border-[#D4AF37] inline-block">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bogura Women Chamber of Commerce and Industry (BWCCI) is a non-profit, non-political trade organization formed by a visionary group of women entrepreneurs. It was established to act as the voice of women business owners who often struggle to navigate the traditional, male-dominated chambers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since its foundation, BWCCI has grown to become the premiere regional catalyst for female economic empowerment. By offering critical networking circles, mentorship pathways, policy representation, and professional capacity workshops, we have helped hundreds of micro and small women entrepreneurs transition into formal and sustainable business owners.
            </p>
          </div>

          <div className="bg-white border-4 border-[#D4AF37] rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-6">Our Foundation Pillars</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#8B1538] mb-2">Inclusive Representation:</h4>
                <p className="text-gray-700 text-sm">Open to all women leaders, from rural weavers to corporate directors.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#8B1538] mb-2">Capacity Development:</h4>
                <p className="text-gray-700 text-sm">Continuous skills updates in agro-tech, digital marketing, and export procedures.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#8B1538] mb-2">Local Integration:</h4>
                <p className="text-gray-700 text-sm">Aligning local cottage industries with national supply chains.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="border-l-4 border-[#8B1538] bg-gray-50 p-8 rounded">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538]">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To promote, encourage, and secure a favorable economic climate for women entrepreneurs in Bogura by delivering capacity-building workshops, financial literacy initiatives, and policy-level advocacy. We strive to make women-led enterprises competitive in both domestic and international markets.
            </p>
          </div>

          {/* Vision Card */}
          <div className="border-l-4 border-[#D4AF37] bg-gray-50 p-8 rounded">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">👁️</div>
              <h3 className="font-playfair text-2xl font-bold text-[#8B1538]">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To establish a gender-equal market environment in Bangladesh where women business owners are fully integrated into mainstream financial channels, hold prominent positions in trade bodies, and serve as leading drivers of national GDP development.
            </p>
          </div>
        </div>

        {/* Core Objectives Section */}
        <div>
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-12 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Core Objectives & Focus Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border-2 border-[#8B1538] p-6 rounded">
              <h4 className="font-bold text-[#8B1538] mb-3 text-lg">Trade Licensing & Registry</h4>
              <p className="text-gray-700 text-sm">
                Assisting women entrepreneurs in securing Trade Licenses, IRC/ERC certifications, TIN registration, and opening bank accounts to formalize their operations.
              </p>
            </div>

            <div className="border-2 border-[#8B1538] p-6 rounded">
              <h4 className="font-bold text-[#8B1538] mb-3 text-lg">Financial Linkage</h4>
              <p className="text-gray-700 text-sm">
                Bridging the gap between commercial banks and women business owners to secure low-interest collateral-free SME loans under government refinancing initiatives.
              </p>
            </div>

            <div className="border-2 border-[#8B1538] p-6 rounded">
              <h4 className="font-bold text-[#8B1538] mb-3 text-lg">Product Exhibitions</h4>
              <p className="text-gray-700 text-sm">
                Hosting district-level fairs and supporting trade delegations to showcase Bogura&apos;s unique clay boutique, and heirloom handicrafts to national buyers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}