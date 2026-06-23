'use client'

import { useState } from 'react'

type ImageItem = {
  src: string
  title: string
  category: string
}

const images: ImageItem[] = [
  { src: '/assets/images/hero.png', title: 'SME Expo Stalls', category: 'Exhibitions' },
  { src: '/assets/images/workshop.png', title: 'E-Commerce Bootcamp', category: 'Workshops & Training' },
  { src: '/assets/images/president.png', title: 'NBR Dialogue', category: 'Chamber Events' },
  { src: '/assets/images/workshop.png', title: 'Accounting Workshop', category: 'Workshops & Training' },
  { src: '/assets/images/hero.png', title: 'Winter Boutique Fair', category: 'Exhibitions' },
  { src: '/assets/images/president.png', title: 'BWCCI AGM 2025', category: 'Chamber Events' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [modalIndex, setModalIndex] = useState<number | null>(null)

  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter)

  function open(index: number) {
    setModalIndex(index)
    document.body.style.overflow = 'hidden'
  }

  function close() {
    setModalIndex(null)
    document.body.style.overflow = ''
  }

  function next() {
    if (modalIndex === null) return
    setModalIndex((modalIndex + 1) % filtered.length)
  }

  function prev() {
    if (modalIndex === null) return
    setModalIndex((modalIndex - 1 + filtered.length) % filtered.length)
  }

  function download(src: string) {
    const a = document.createElement('a')
    a.href = src
    a.download = src.split('/').pop() || 'image'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const categories = ['All', ...Array.from(new Set(images.map(i => i.category)))]

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded ${filter === cat ? 'bg-[#8B1538] text-white' : 'bg-gray-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((img, idx) => (
          <div key={idx} className="shadow rounded overflow-hidden bg-white">
            <img src={img.src} alt={img.title} className="w-full h-56 object-cover cursor-pointer" onClick={() => open(idx)} />
            <div className="p-3">
              <div className="font-semibold text-[#8B1538]">{img.title}</div>
              <div className="text-sm text-gray-600">{img.category}</div>
              <div className="mt-3 flex gap-2">
                <button onClick={() => open(idx)} className="px-3 py-1 border border-[#8B1538] text-[#8B1538] rounded">View</button>
                <button onClick={() => download(img.src)} className="px-3 py-1 bg-[#8B1538] text-white rounded">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative max-w-3xl w-full mx-4">
            <img src={filtered[modalIndex].src} alt={filtered[modalIndex].title} className="w-full h-[60vh] object-contain bg-white p-2 rounded" />

            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <button onClick={prev} className="p-2 bg-white rounded shadow">◀</button>
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button onClick={next} className="p-2 bg-white rounded shadow">▶</button>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <div className="text-white">{filtered[modalIndex].title}</div>
              <div className="flex gap-2">
                <button onClick={() => download(filtered[modalIndex].src)} className="px-3 py-1 bg-white text-[#8B1538] rounded">Download</button>
                <button onClick={close} className="px-3 py-1 bg-white text-[#8B1538] rounded">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
