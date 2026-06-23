import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import ResourceSection from '@/components/ui/resource-section'

export const metadata = {
  title: 'Resources & Publications - BWCCI',
  description: 'BWCCI resources, reports, guides, and policy documents for women entrepreneurs.',
}

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Resources & Publications</h1>
          <p className="text-gray-200">Home &gt; Resources</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <ResourceSection title="Publications & Guides" items={[
          {
            title: 'BWCCI Quarterly Magazine - Q1 2026',
            description: 'Latest edition of the quarterly magazine covering chamber news, SME success stories, and event updates.',
            category: 'Publication',
            size: '4.8 MB',
            filename: 'BWCCI-Quarterly-Magazine-Q1-2026.pdf',
          },
          {
            title: 'Bogura Women Entrepreneurship Guidebook',
            description: 'Practical guide to launching and growing women-led businesses in Bogura and the North Bengal region.',
            category: 'Guidebook',
            size: '2.3 MB',
            filename: 'BWCCI-Entrepreneurship-Guidebook.pdf',
          },
          {
            title: 'Export Readiness Manual for Boutique Crafts',
            description: 'Step-by-step resource for exporting handicrafts, packaging, labeling, and compliance requirements.',
            category: 'Manual',
            size: '3.1 MB',
            filename: 'Export-Readiness-Manual.pdf',
          },
        ]} />

        <ResourceSection title="Annual & Audit Reports" items={[
          {
            title: 'BWCCI Annual Activity Report 2024-2025',
            description: 'Detailed annual report highlighting BWCCI programs, membership growth, and financial results.',
            category: 'Report',
            size: '3.5 MB',
            filename: 'BWCCI-Annual-Activity-Report-2024-2025.pdf',
          },
          {
            title: 'BWCCI Audited Accounts Statements FY 24-25',
            description: 'Audited financial statements for the fiscal year 2024-2025, including income, expenses and reserves.',
            category: 'Audit Statement',
            size: '1.7 MB',
            filename: 'BWCCI-Audited-Accounts-FY-24-25.pdf',
          },
          {
            title: 'SME Development Impact Audit Report 2024',
            description: 'Impact audit report reviewing SME support programs and outcomes for women entrepreneurs.',
            category: 'Audit Report',
            size: '2.1 MB',
            filename: 'SME-Development-Impact-Audit-Report-2024.pdf',
          },
        ]} />

        <ResourceSection title="Govt Policies & Gazettes" items={[
          {
            title: 'National SME Policy Guidelines - Bangladesh',
            description: 'Government policy summary for supporting small and medium enterprises, with emphasis on women-led firms.',
            category: 'Policy',
            size: '5.2 MB',
            filename: 'National-SME-Policy-Guidelines.pdf',
          },
          {
            title: 'NBR Gazette: Tax Reductions for Boutique Firms',
            description: 'Official gazette notification for tax incentives and reductions affecting boutique and craft businesses.',
            category: 'Gazette',
            size: '1.2 MB',
            filename: 'NBR-Gazette-Tax-Reductions.pdf',
          },
          {
            title: 'Bangladesh Industrial Policy 2025 Summary',
            description: 'Summary of the 2025 industrial policy and its implications for women entrepreneurs and export promotion.',
            category: 'Policy Summary',
            size: '2.7 MB',
            filename: 'Bangladesh-Industrial-Policy-2025.pdf',
          },
        ]} />
      </main>

      <Footer />
    </>
  )
}
