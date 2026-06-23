import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import MembershipForm from '../../components/ui/membership-form'

export const metadata = {
  title: 'Membership - BWCCI',
  description: 'Join Bogura Women Chamber of Commerce & Industry',
}

export default function MembershipPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Chamber Membership</h1>
          <p className="text-gray-200">Home &gt; Membership</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Membership Categories</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl text-[#8B1538]">General Member</h3>
                <p className="text-sm text-gray-700">Annual Subscription: BDT 3,000</p>
                <p className="mt-3 text-gray-700">For established women-led firms, boutique houses, processing plants, and formal shops in Bogura. Requires a valid Trade License and TIN certification.</p>
              </div>

              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl text-[#8B1538]">Associate Member</h3>
                <p className="text-sm text-gray-700">Annual Subscription: BDT 1,000</p>
                <p className="mt-3 text-gray-700">For home-based boutiques, micro cottage artisans, and young female startup founders. Trade license is not mandatory initially.</p>
              </div>

              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl text-[#8B1538]">Donor / Corporate Life Member</h3>
                <p className="text-sm text-gray-700">One-time Admission: BDT 25,000</p>
                <p className="mt-3 text-gray-700">For large corporate patrons, bank partners, and senior advisors supporting female business leadership in the district.</p>
              </div>

              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl text-[#8B1538]">Why Join BWCCI Bogura?</h3>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                  <li>Collateral-free SME Loan Support</li>
                  <li>Free Stall Spaces at trade expos</li>
                  <li>Digital Skill Workshops</li>
                  <li>Certificate of Origin & recommendation letters</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#8B1538] mb-6">Membership Inquiry Form</h2>

            <MembershipForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
