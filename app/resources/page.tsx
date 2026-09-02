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
        {/* All resources have been removed as requested */}
        
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          <p className="text-gray-500 text-lg">No resources available at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">Please check back later for updates.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}