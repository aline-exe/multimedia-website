"use client"

export function VisualExperienceSection() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Experiência Visual</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mergulhe na experiência completa de áudio e vídeo
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video className="w-full h-auto" loop muted autoPlay controls playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-11-24%20at%2021.33.33-gaC5ZlG6WiqOao01ZvShqQktCcSQKP.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
