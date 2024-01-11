'use client';

import Youtube from 'react-youtube';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const option = {
    width: '300',
    height: '250',
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-2 right-4">
          <Button
            className="float-right text-lg mb-1 rounded-lg"
            onClick={handleOpen}
          >
            X
          </Button>
          <Youtube
            videoId={youtubeId}
            onReady={(event) => {
              event.target.pauseVideo();
            }}
            opts={option}
            onError={(err) => {
              toast.error('Tidak dapat memutar video');
            }}
          />
        </div>
      ) : (
        <Button
          className="fixed bottom-2 right-5 text-base mb-1 rounded-lg"
          onClick={handleOpen}
        >
          Play Trailer
        </Button>
      )}
    </>
  );
};

export default VideoPlayer;
