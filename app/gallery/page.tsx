import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Gallery from '@/components/ui/gallery'

export const metadata = {
  title: 'Gallery - BWCCI',
  description: 'Explore BWCCI media gallery with photos from exhibitions, training, and chamber events',
}

export default function GalleryPage() {
  return (
    <>
      <Header />

      <div className="bg-[#8B1538] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Media Gallery</h1>
          <p className="text-gray-200">Home &gt; Media Gallery</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-gray-700">All Photos — Chamber Events, Workshops & Training, Trade Fairs & Expos</p>
        </div>

        <Gallery />

        <aside className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2" />

        </aside>
      </main>

      <Footer />
    </>
  )
}
