import React from 'react';
import Modal from 'react-modal';

type VideoModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  videoId: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onRequestClose, videoId }) => {
  const youtubeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&volume=20`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Service Video"
      style={{
        content: {
          width: '840px',
          height: '470px',
          padding: '0',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
      }}
    >
      <div style={{ position: 'relative' }}>
        <button
          onClick={onRequestClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          ×
        </button>
        <iframe
          width="840"
          height="470"
          src={youtubeSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;