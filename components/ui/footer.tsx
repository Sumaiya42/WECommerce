export default function Footer() {
  return (
    <footer className="bg-[#8B1538] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About BWCCI */}
        <div>
          <h3 className="font-playfair text-xl font-bold mb-4 text-[#D4AF37]">About BWCCI</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Bogura Women Chamber of Commerce and Industry (BWCCI) is the leading local trade body dedicated to empowering women entrepreneurs in Bogura and the North Bengal region. We advocate for gender-friendly business policies and provide capacity building.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-playfair text-xl font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-gray-100 hover:text-[#D4AF37]">About Chamber</a></li>
            <li><a href="/president-message" className="text-gray-100 hover:text-[#D4AF37]">President&apos;s Message</a></li>
            <li><a href="/board-directors" className="text-gray-100 hover:text-[#D4AF37]">Board of Directors</a></li>
            <li><a href="/membership" className="text-gray-100 hover:text-[#D4AF37]">Membership Application</a></li>
            <li><a href="/notice-board" className="text-gray-100 hover:text-[#D4AF37]">Latest Notices</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-playfair text-xl font-bold mb-4 text-[#D4AF37]">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="text-gray-100 hover:text-[#D4AF37]">Policy Advocacy</a></li>
            <li><a href="/services" className="text-gray-100 hover:text-[#D4AF37]">Skill Training</a></li>
            <li><a href="/services" className="text-gray-100 hover:text-[#D4AF37]">Trade Fair Facilitation</a></li>
            <li><a href="/committees" className="text-gray-100 hover:text-[#D4AF37]">Standing Committees</a></li>
            <li><a href="/resources" className="text-gray-100 hover:text-[#D4AF37]">Publications &amp; Reports</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-playfair text-xl font-bold mb-4 text-[#D4AF37]">Contact Details</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-[#D4AF37]">📍</span>
              <span>Holding 24, Road 02, Sutrapur, Bogura - 5800, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#D4AF37]">📞</span>
              <span>+880 1855687030</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#D4AF37]">📧</span>
              <span>nazmalize@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7a1530] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-100">
        <p className="mb-2 md:mb-0">© 2026 Bogura Women Chamber of Commerce & Industry (BWCCI). All Rights Reserved.</p>
        <p>Powered by BWCCI IT Secretariat</p>
      </div>
    </footer>
  )
}