import { useEffect, useState } from 'react';

type UseAudioReturnType = [boolean, () => void];

const useAudio = (url: string): UseAudioReturnType => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    const currentAudio = audio;
    
    const handleEnded = () => setPlaying(false);
    currentAudio?.addEventListener('ended', handleEnded);

    return () => {
      currentAudio?.removeEventListener('ended', handleEnded);
    };
  }, [audio]);

  useEffect(() => {
    if (audio === null) return;
    playing ? audio.play().catch(e => console.error('Error playing audio:', e)) : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    const newAudio = new Audio(url);
    setAudio(newAudio);
    return () => {
      newAudio.pause();
    }
  }, [url]);

  return [playing, toggle];
};

export default useAudio;
