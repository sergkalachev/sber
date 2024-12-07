import React from 'react';
import './Service.css';
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
const Service = ({ name, icon, descriptionLink, videoId, onAdd, isSelected }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (React.createElement("div", { className: "service" },
        React.createElement("div", { className: "icon" }, typeof icon === 'string' ? React.createElement("img", { src: icon, alt: `${name} icon` }) : icon),
        React.createElement("h3", null, name),
        React.createElement("a", { href: descriptionLink, onClick: (e) => {
                e.preventDefault();
                setIsModalOpen(true);
            }, className: "service-link" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"),
        React.createElement(VideoModal, { isOpen: isModalOpen, onRequestClose: () => setIsModalOpen(false), videoId: videoId }),
        React.createElement("button", { onClick: onAdd, className: "service-add-btn", style: {
                backgroundColor: isSelected ? 'green' : 'gray',
                color: 'white'
            } }, isSelected ? '✔' : '+')));
};
export default Service;
