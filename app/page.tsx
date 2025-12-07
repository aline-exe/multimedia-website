import { Hero } from "@/components/hero"
import { AudioPlayerSection } from "@/components/audio-player-section"
import { CollectionSection } from "@/components/collection-section"
import { ConceptsSection } from "@/components/concepts-section"
import { QuizSection } from "@/components/quiz-section"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Plataforma Interativa de Áudio Digital",
  description: "Plataforma educacional para reprodução de MP3, visualização MIDI e aprendizado sobre áudio digital",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <AudioPlayerSection />
      <CollectionSection />
      <ConceptsSection />
      <VideoSection />
      <QuizSection />
      <Footer />
    </main>
  )
}
