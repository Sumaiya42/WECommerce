'use client'

type ResourceItem = {
  title: string
  description: string
  category: string
  size: string
  filename: string
}

type ResourceSectionProps = {
  title: string
  items: ResourceItem[]
}

export default function ResourceSection({ title, items }: ResourceSectionProps) {
  function downloadFile(filename: string) {
    const content = `This is a placeholder resource for ${filename}`
    const blob = new Blob([content], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(link.href)
  }

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-playfair text-[#8B1538] font-semibold mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-100 bg-[#fcfbf9] p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8B1538] mb-2">{item.category}</p>
                <h3 className="text-2xl font-semibold text-[#2D2D2D]">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <span className="text-sm text-gray-500">{item.size}</span>
                <button
                  type="button"
                  onClick={() => downloadFile(item.filename)}
                  className="rounded-full bg-[#8B1538] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#6c1130] transition"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
