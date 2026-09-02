'use client'

import { useMemo, useState } from 'react'

type Notice = {
  title: string
  date: string
  category: string
  summary: string
  details: string
  filename: string
}

const notices: Notice[] = [
  // All three notices have been removed as requested
  // Add new notices here when needed
]

const categories = ['All', 'Notices', 'Events', 'Resources']

export default function NoticeBoard() {
  const [filter, setFilter] = useState('All')
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

  const filteredNotices = useMemo(
    () => (filter === 'All' ? notices : notices.filter((notice) => notice.category === filter)),
    [filter]
  )

  function downloadNotice(notice: Notice) {
    const content = `${notice.title}\n${notice.date}\n\n${notice.summary}\n\n${notice.details}`
    const blob = new Blob([content], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = notice.filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              filter === category
                ? 'bg-[#8B1538] text-white border-[#8B1538]'
                : 'bg-white text-[#8B1538] border-[#8B1538] hover:bg-[#f9f5f3]'
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {notices.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
          <p className="text-gray-500">No notices available at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">Please check back later for updates.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredNotices.map((notice) => (
            <article key={notice.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B1538]">{notice.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{notice.date} · {notice.category}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded bg-[#8B1538] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#6c1130] transition"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="rounded border border-[#8B1538] px-4 py-2 text-sm font-semibold text-[#8B1538] hover:bg-[#f9f5f3] transition"
                    onClick={() => downloadNotice(notice)}
                  >
                    Download
                  </button>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{notice.summary}</p>
            </article>
          ))}
        </div>
      )}

      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-semibold text-[#8B1538]">{selectedNotice.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedNotice.date} · {selectedNotice.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>{selectedNotice.details}</p>
              <p>{selectedNotice.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}