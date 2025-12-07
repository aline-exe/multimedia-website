"use client"

export function VideoShowcase() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Experiência Visual</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mergulhe na experiência completa de áudio e vídeo
          </p>
        </div>

        <div className="relative max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pinterest-video-FlwPr63i0qdhFqrZ80nIDbsrmQ7Ihg.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </section>
  )
}
