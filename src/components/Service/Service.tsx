import React from 'react';
import './Service.css';
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal'

type ServiceProps = {
  name: string;
  price: number;
  icon: string | JSX.Element;
  descriptionLink: string;
  videoId: string;
  onAdd: () => void;
  isSelected: boolean; // Add isSelected here
};

const Service = ({ name, icon, descriptionLink, videoId, onAdd, isSelected }: ServiceProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="service">
      <div className="icon">{typeof icon === 'string' ? <img src={icon} alt={`${name} icon`} /> : icon}</div>
      <h3>{name}</h3>
      
      <a
        href={descriptionLink}
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        className="service-link"
      >
        Подробнее
      </a>

      <VideoModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        videoId={videoId}
      />

      
      <button
        onClick={onAdd}
        className="service-add-btn"
        style={{
          backgroundColor: isSelected ? 'green' : 'gray',
          color: 'white'
        }}
      >
        {isSelected ? '✔' : '+'}
      </button>
    </div>
  );
};

export default Service;