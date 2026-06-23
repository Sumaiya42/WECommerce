import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Events & Fairs - BWCCI',
  description: 'Upcoming fairs, training sessions, and past activities hosted by BWCCI',
}

const upcoming = [
  { date: '12 JUL', title: 'Bogura Women SME Expo 2026', desc: 'A grand 5-day exhibition showcasing boutique embroidery, hand-woven fabrics, clay items, and food products by 120+ female SME owners.', venue: 'Bogura Municipal Grounds' },
  { date: '28 JUL', title: 'Digital E-Commerce Bootcamp', desc: 'Hands-on practice on listing inventory, running promotional campaigns, and managing bKash/Nagad merchant accounts for local startups.', venue: 'BWCCI Seminar Hall' },
  { date: '15 AUG', title: 'Agro Packaging & Preservation', desc: 'Learn modern packaging, shelf-life expansion, labeling regulations, and food safety standards from visiting research experts.', venue: 'Upazila Auditorium, Bogura' },
]

const past = [
  { date: 'May 18, 2026', title: 'NBR Pre-Budget Dialogue', desc: 'Joint meeting with NBR and district tax officials recommending zero-VAT on handicraft trade transactions run by women.' },
  { date: 'March 10, 2026', title: 'Financial Bookkeeping Training', desc: 'Two-day session covering cash-flow accounting, profit margins, bank loan files, and tax documentation for 50 startups.' },
  { date: 'Dec 24, 2025', title: 'Bogura Winter Boutique Craft Fair', desc: 'Three-day boutique and traditional handicraft expo held at Bogura Edward Park, generating significant sales.' },
  { date: 'Sep 15, 2025', title: 'BWCCI Annual General Meeting 2025', desc: 'Annual gathering to review financial accounts, audit reports, and announce upcoming plans.' },
]

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
          {/* Main column */}
          <main className="lg:col-span-2">
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Upcoming Fairs & Training Sessions</h2>

            <div className="space-y-6 mb-12">
              {upcoming.map((ev) => (
                <article key={ev.title} className="bg-white p-6 rounded shadow flex gap-6 items-start">
                  <div className="w-24 text-center">
                    <div className="text-2xl font-bold text-[#8B1538]">{ev.date.split(' ')[0]}</div>
                    <div className="text-sm text-gray-500">{ev.date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#8B1538]">{ev.title}</h3>
                    <p className="text-sm text-gray-700 mt-2">{ev.desc}</p>
                    <p className="mt-3 text-sm text-gray-600">📍 Venue: {ev.venue}</p>
                  </div>
                </article>
              ))}
            </div>

            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Milestones & Past Activities</h2>
            <div className="space-y-6">
              {past.map((p) => (
                <div key={p.title} className="bg-white p-6 rounded shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-[#8B1538]">{p.title}</h3>
                      <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
                    </div>
                    <div className="text-sm text-gray-500">{p.date}</div>
                  </div>
                </div>
              ))}
            </div>
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
