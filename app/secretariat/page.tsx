import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Secretariat & Department Wings - BWCCI',
  description: 'Learn about the operational structure and secretariat wings of BWCCI',
}

export default function SecretariatPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Secretariat & Department Wings</h1>
          <p className="text-gray-200">Home &gt; About Us &gt; Secretariat Wings</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Operational Structure */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-8 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Operational Structure
          </h2>
          
          <p className="text-gray-700 leading-relaxed mt-6">
            The BWCCI Secretariat functions under the administrative leadership of the Secretary General, executing policies and strategies defined by the President and Executive Board. Located at our headquarters in Sutrapur, Bogura, the secretariat hosts 5 dedicated operational wings to assist women entrepreneurs efficiently.
          </p>
        </div>

        {/* Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* General Affairs Wing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-[#D4AF37]">📁</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">General Affairs Wing</h3>
            <p className="text-gray-700 text-sm">
              Coordinates standard administrative operations, board meetings, membership applications, and acts as the liaison with district authorities and commercial banks.
            </p>
          </div>

          {/* Research & Planning Wing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-blue-500">🔍</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Research & Planning Wing</h3>
            <p className="text-gray-700 text-sm">
              Gathers research data regarding local cottage industries, boutique hubs, and women-led SMEs. Drafts key policy recommendations and budget suggestions for local finance offices.
            </p>
          </div>

          {/* IT Wing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Information Technology (IT) Wing</h3>
            <p className="text-gray-700 text-sm">
              Maintains the BWCCI web portal, online registration registries, digital skill classrooms, and offers support for web-based trade and social commerce channels.
            </p>
          </div>

          {/* PR & Communications Wing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">📢</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">PR & Communications Wing</h3>
            <p className="text-gray-700 text-sm">
              Responsible for press releases, local media reports, organizing news conferences, marketing trade fairs, and designing publications like our quarterly business magazine.
            </p>
          </div>

          {/* Accounts & Audit Wing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Accounts & Audit Wing</h3>
            <p className="text-gray-700 text-sm">
              Manages annual subscription dues, project funding accounts, trade fair financial reports, auditing, and tax compliance protocols for the chamber.
            </p>
          </div>

          {/* Arbitration Wing */}
          <div className="bg-pink-50 border-4 border-[#8B1538] rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">Chamber Arbitration Wing</h3>
            <p className="text-gray-700 text-sm">
              Provides a supportive, fast-track mediation system for resolving commercial, supplier, or property-lease disputes for women business owners at minimum expense.
            </p>
          </div>
        </div>

        {/* Secretariat Officials */}
        <div className="mt-20">
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-12 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Secretariat Officials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Official 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <h3 className="font-bold text-[#8B1538] text-lg mb-2">Ferdousi Begum</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-4">SECRETARY GENERAL</p>
              <p className="text-gray-700 text-sm">
                <strong>Email:</strong> sg@bwccibogura.org
              </p>
            </div>

            {/* Official 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <h3 className="font-bold text-[#8B1538] text-lg mb-2">Farzana Yasmin</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-4">ASSISTANT IT OFFICER</p>
              <p className="text-gray-700 text-sm">
                <strong>Email:</strong> it@bwccibogura.org
              </p>
            </div>

            {/* Official 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition">
              <h3 className="font-bold text-[#8B1538] text-lg mb-2">Moushumi Akhter</h3>
              <p className="text-[#D4AF37] font-semibold text-sm mb-4">ACCOUNTS EXECUTIVE</p>
              <p className="text-gray-700 text-sm">
                <strong>Email:</strong> accounts@bwccibogura.org
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}