import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import ContactForm from '@/components/ui/contact-form'

export const metadata = {
  title: 'Contact Us - BWCCI',
  description: 'Get in touch with BWCCI for membership, events, resources, and support.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200">Home &gt; Contact Us</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(280px,380px)]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-playfair text-[#8B1538] font-semibold mb-4">Chamber Head Office</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions regarding membership renewals, loan recommendation letters, or upcoming entrepreneur workshops, please visit our secretariat or contact us via phone or email.
              </p>
              <div className="mt-8 space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-[#8B1538]">Address</h3>
                  <p>Holding 24, Road 02, Sutrapur, Bogura - 5800, Bangladesh</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#8B1538]">Phone</h3>
                  <p>+880 1711131326</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#8B1538]">Email</h3>
                  <p>info@bwccibogura.org</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#8B1538]">Office Hours</h3>
                  <p>Saturday - Thursday: 09:00 AM - 05:00 PM (Friday Closed)</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-playfair text-[#8B1538] font-semibold mb-4">Send Us a Message</h2>
              <ContactForm />
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#8B1538] mb-4">About BWCCI</h3>
              <p className="text-gray-700">
                Bogura Women Chamber of Commerce and Industry (BWCCI) is the leading local trade body dedicated to empowering women entrepreneurs in Bogura and the North Bengal region. We advocate for gender-friendly business policies and provide capacity building.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#8B1538] mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/about" className="hover:text-[#8B1538]">About Chamber</a></li>
                <li><a href="/president-message" className="hover:text-[#8B1538]">President's Message</a></li>
                <li><a href="/board-directors" className="hover:text-[#8B1538]">Board of Directors</a></li>
                <li><a href="/membership" className="hover:text-[#8B1538]">Membership Application</a></li>
                <li><a href="/notice-board" className="hover:text-[#8B1538]">Latest Notices</a></li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#8B1538] mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/services" className="hover:text-[#8B1538]">Policy Advocacy</a></li>
                <li><a href="/services" className="hover:text-[#8B1538]">Skill Training</a></li>
                <li><a href="/services" className="hover:text-[#8B1538]">Trade Fair Facilitation</a></li>
                <li><a href="/committees" className="hover:text-[#8B1538]">Standing Committees</a></li>
                <li><a href="/resources" className="hover:text-[#8B1538]">Publications & Reports</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}
