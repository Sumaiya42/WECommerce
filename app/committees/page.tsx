'use client'

import { useState } from 'react'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function CommitteesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const committees = [
    {
      id: 1,
      title: 'Women Entrepreneurship Development Committee',
      description: 'Focuses on capacity building, mentorship programs, and startup support initiatives. This committee designs and implements skills training workshops covering business planning, financial management, and leadership development. Members work directly with new entrepreneurs to provide guidance and market linkages.',
      head: 'Fatima Khanum',
      members: 5,
      focus: ['Skill Training', 'Mentorship', 'Startup Support']
    },
    {
      id: 2,
      title: 'Agro-processing & Food Preservation Committee',
      description: 'Dedicated to promoting value-added agriculture products and traditional food processing. The committee coordinates with farmers, processors, and exporters to improve quality standards and expand market access. Focus areas include organic certification, packaging innovation, and food safety compliance.',
      head: 'Rukhsana Begum',
      members: 7,
      focus: ['Agro-tech', 'Food Safety', 'Quality Standards']
    },
    {
      id: 3,
      title: 'Boutique, Handloom & Clay Crafts Committee',
      description: 'Promotes traditional Bogura handicrafts and artisan products to both domestic and international markets. The committee organizes regular exhibitions, supports artisans with design consultation, and helps secure fair trade certifications. Special emphasis on preserving cultural heritage while modernizing product appeal.',
      head: 'Nasrin Akhter',
      members: 6,
      focus: ['Handicraft Promotion', 'Design Support', 'Export Markets']
    },
    {
      id: 4,
      title: 'ICT & Social E-Commerce Committee',
      description: 'Drives digital transformation and e-commerce adoption among women entrepreneurs. Provides training on online store setup, digital marketing, payment gateway integration, and social media management. Helps bridge the digital divide and enables rural entrepreneurs to reach global markets online.',
      head: 'Yasmin Sultana',
      members: 5,
      focus: ['Digital Marketing', 'E-commerce', 'Social Commerce']
    },
    {
      id: 5,
      title: 'SME Credit Linkage & Banking Committee',
      description: 'Facilitates financial inclusion and access to collateral-free business loans. Works with commercial banks, microfinance institutions, and government bodies to ensure favorable lending terms for women entrepreneurs. Assists with loan applications, collateral assessment, and financial literacy programs.',
      head: 'Sadia Khan',
      members: 8,
      focus: ['Financial Inclusion', 'Loan Support', 'Banking Relations']
    }
  ]

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Standing Committees</h1>
          <p className="text-gray-200">Home &gt; Standing Committees</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-playfair text-4xl font-bold text-[#8B1538] mb-4 pb-4 border-b-4 border-[#D4AF37] inline-block">
            Driving Policy & Specific Trade Sectors
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed max-w-4xl">
            BWCCI's standing committees form the operational backbone of our trade advocacy. Composed of executive board members, trade experts, and prominent chamber members, these committees analyze sector-specific challenges, formulate budget recommendations, and organize targeted events.
          </p>
        </div>

        {/* Committees Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Header - Clickable */}
              <button
                onClick={() => toggleExpand(committee.id)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left"
              >
                <h3 className="font-bold text-[#8B1538] text-lg">
                  {committee.id}. {committee.title}
                </h3>
                <span
                  className={`text-2xl text-[#D4AF37] transition-transform duration-300 ${
                    expandedId === committee.id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expanded Content */}
              {expandedId === committee.id && (
                <div className="bg-gray-50 border-t-2 border-gray-200 p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {committee.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Committee Head:</p>
                      <p className="text-[#8B1538] font-bold">{committee.head}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Members:</p>
                      <p className="text-[#8B1538] font-bold">{committee.members} Members</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-600 font-semibold mb-2">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {committee.focus.map((area, index) => (
                        <span
                          key={index}
                          className="bg-[#D4AF37] text-[#8B1538] px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button className="bg-[#8B1538] text-white px-6 py-2 rounded font-semibold hover:bg-[#6B0F2B] transition">
                      Learn More
                    </button>
                    <button className="border-2 border-[#8B1538] text-[#8B1538] px-6 py-2 rounded font-semibold hover:bg-[#8B1538] hover:text-white transition">
                      Join Committee
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gray-50 p-8 rounded-lg border-l-4 border-[#D4AF37]">
          <h3 className="font-playfair text-2xl font-bold text-[#8B1538] mb-4">How to Join a Committee?</h3>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>Become an active BWCCI member through the membership application process</li>
            <li>Attend orientation sessions to understand committee objectives and activities</li>
            <li>Express your interest to the committee head or chamber secretariat</li>
            <li>Participate in regular meetings and contribute your expertise</li>
            <li>Collaborate on sector-specific initiatives and advocacy campaigns</li>
          </ol>
        </div>
      </div>

      <Footer />
    </>
  )
}