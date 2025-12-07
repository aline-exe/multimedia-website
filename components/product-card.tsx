"use client"

import { useState } from "react"
import { Music } from "lucide-react"
import { useSpotifyPreview } from "@/hooks/use-spotify-preview"
import { MusicPlayer } from "./music-player"

interface ProductCardProps {
  id: number
  artist: string
  album: string
  price: string
  image: string
}

export function ProductCard({ id, artist, album, price, image }: ProductCardProps) {
  const { preview, loading } = useSpotifyPreview()
  const [showPlayer, setShowPlayer] = useState(false)

  const handlePlayClick = async () => {
    if (!showPlayer && !loading) {
      await preview.fetchPreview(artist, album)
    }
    setShowPlayer(!showPlayer)
  }

  return (
    <div key={id} className="group cursor-pointer">
      {/* Product Image */}
      <div className="mb-4 bg-muted overflow-hidden aspect-square relative border border-foreground/10">
        <img
          src={image || "/placeholder.svg"}
          alt={album}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handlePlayClick}
          disabled={loading}
          className="absolute bottom-4 right-4 bg-foreground text-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 disabled:opacity-50"
        >
          <Music size={20} />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide">{artist}</p>
        <h3 className="text-sm font-bold leading-tight">{album}</h3>
        <p className="text-xs font-medium text-foreground/70 pt-2">{price}</p>
      </div>

      {showPlayer && preview && (
        <div className="mt-4">
          <MusicPlayer
            previewUrl={preview.preview_url}
            trackName={preview.track_name}
            artists={preview.artists}
            albumName={preview.album_name}
          />
        </div>
      )}
    </div>
  )
}
