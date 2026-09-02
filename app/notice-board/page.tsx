import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import NoticeBoard from '@/components/ui/notice-board'

export const metadata = {
  title: 'Notice Board - BWCCI',
  description: 'Latest BWCCI notices, event alerts, and downloadable announcements',
}

export default function NoticeBoardPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Notice Board</h1>
          <p className="text-gray-200">Home &gt; Notice Board</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,320px)]">
          <section>
            <NoticeBoard />
          </section>

          <aside className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#8B1538] mb-3">Latest Alert</h2>
              <p className="text-gray-700">Make sure your membership is active to receive all notice board updates. Contact the secretariat for help with submissions.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#8B1538] mb-3">Contact Support</h2>
              <p className="text-gray-700">For urgent inquiries, email info@bwccibogura.org or call +880 1711131326.</p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}