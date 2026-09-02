import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Events & Fairs - BWCCI',
  description: 'Upcoming fairs, training sessions, and past activities hosted by BWCCI',
}

export default function EventsPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">Events & Trade Fairs</h1>
          <p className="text-gray-200">Home &gt; Events & Fairs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column - Empty now */}
          <main className="lg:col-span-2">
            {/* Content removed */}
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-playfair text-lg font-bold text-[#8B1538] mb-2">About BWCCI</h4>
              <p className="text-sm text-gray-700">Bogura Women Chamber of Commerce and Industry (BWCCI) is the leading local trade body dedicated to empowering women entrepreneurs in Bogura and the North Bengal region.</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded shadow border-l-4 border-[#D4AF37]">
              <h4 className="font-playfair text-lg font-bold text-[#8B1538] mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="/about" className="hover:text-[#8B1538]">About Chamber</a></li>
                <li><a href="/president-message" className="hover:text-[#8B1538]">President's Message</a></li>
                <li><a href="/board-directors" className="hover:text-[#8B1538]">Board of Directors</a></li>
                <li><a href="/membership" className="hover:text-[#8B1538]">Membership Application</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-playfair text-lg font-bold text-[#8B1538] mb-2">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Policy Advocacy</li>
                <li>Skill Training</li>
                <li>Trade Fair Facilitation</li>
                <li>Standing Committees</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-playfair text-lg font-bold text-[#8B1538] mb-2">Contact Details</h4>
              <p className="text-sm text-gray-700">📍 Holding 24, Road 02, Sutrapur, Bogura - 5800, Bangladesh</p>
              <p className="text-sm text-gray-700">📞 +880 1711131326</p>
              <p className="text-sm text-gray-700">✉️ info@bwccibogura.org</p>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  )
}