import { useEffect, useRef, useState, useCallback } from 'react'

type UseAudioReturnType = [boolean, () => void]

const useAudio = (url: string): UseAudioReturnType => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState<boolean>(false)

  const toggle = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  useEffect(() => {
    if (typeof Audio === 'undefined') return

    if (!audioRef.current) {
      audioRef.current = new Audio(url)
      audioRef.current.preload = 'auto'
    } else if (audioRef.current.src !== url) {
      audioRef.current.pause()
      audioRef.current.src = url
      audioRef.current.load()
    }

    const audio = audioRef.current
    
    const handleEnded = () => setPlaying(false)
    const handleError = (e: Event) => {
      console.error('Audio playback error:', e)
      setPlaying(false)
    }
    
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [url])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing audio:', error)
          setPlaying(false)
        })
      }
    } else {
      audio.pause()
    }
  }, [playing])

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  return [playing, toggle]
}

export default useAudio
