import { useEffect, useState } from 'react'

const useAudio = (url) => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    let a = new Audio(url)
    audio?.addEventListener('ended', () => setPlaying(false))
    setAudio(a)
    return () => {
      audio?.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  useEffect(() => {
    if (audio === null) return
    playing ? audio.play() : audio.pause()
  }, [playing])

  return [playing, toggle]
}

export default useAudio
