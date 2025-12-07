"use client"

interface Category {
  id: number
  name: string
  count: number
  image: string
}

const categories: Category[] = [
  { id: 1, name: "Jazz Clássico", count: 342, image: "/jazz-vinyl-record.jpg" },
  { id: 2, name: "Rock Progressivo", count: 287, image: "/rock-vinyl-record.jpg" },
  { id: 3, name: "Eletrônico", count: 451, image: "/electronic-music-vinyl.jpg" },
  { id: 4, name: "Soul & Funk", count: 263, image: "/soul-funk-vinyl.jpg" },
]

export function CategoriesSection() {
  return (
    <section className="bg-muted py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-wider uppercase opacity-70 mb-2">Generos</p>
          <h2 className="text-5xl sm:text-6xl font-black text-balance">Explore por Categoria</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer relative h-64 overflow-hidden bg-background">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white font-black text-lg leading-tight mb-2">{category.name}</h3>
                <p className="text-white/80 text-xs font-semibold">{category.count} itens</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
