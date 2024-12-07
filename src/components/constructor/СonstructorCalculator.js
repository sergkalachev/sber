import "./ConstructorCalculator.css";
import Service from "../Service/Service";
import { useState } from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Modal from "react-modal";
import React from "react";
function ConstructorCalculator() {
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const openFeedbackModal = () => setIsFeedbackModalOpen(true);
    const closeFeedbackModal = () => setIsFeedbackModalOpen(false);
    const handleFeedbackSubmit = () => {
        setFeedbackMessage("Запрос отправлен");
        setTimeout(() => {
            setFeedbackMessage("");
            closeFeedbackModal();
        }, 3000);
    };
    const services = [
        {
            name: "Основные настройки",
            price: 20000,
            icon: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z" }))),
            descriptionLink: "https://example.com/service1",
            videoId: "wa34Dgqx2Wc",
        },
        {
            name: "Аналитика",
            price: 12000,
            icon: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z" }))),
            descriptionLink: "https://example.com/service2",
            videoId: "your_youtube_video_id_1",
        },
        {
            name: "Загрузка данных",
            price: 11000,
            icon: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M1 3.488c0-1.926 4.656-3.488 10-3.488 5.345 0 10 1.562 10 3.488s-4.655 3.487-10 3.487c-5.344 0-10-1.561-10-3.487zm10 14.823c.34 0 .678-.007 1.011-.019.045-1.407.537-2.7 1.342-3.745-.839.067-1.643.1-2.353.1-3.006 0-7.588-.523-10-2.256v2.434c0 1.925 4.656 3.486 10 3.486zm0-5.665c5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487zm1.254 7.635c-.438.02-.861.03-1.254.03-2.995 0-7.582-.518-10-2.256v2.458c0 1.925 4.656 3.487 10 3.487 1.284 0 2.526-.092 3.676-.256-1.155-.844-2.02-2.055-2.422-3.463zm6.246-6.281c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm-.563 6.55l-1.84-1.778.736-.758 1.089 1.05 2.43-2.439.751.744-3.166 3.181z" }))),
            descriptionLink: "https://example.com/service3",
            videoId: "your_youtube_video_id_1",
        },
    ];
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const handleToggleService = (service) => {
        const isServiceSelected = selectedServices.some((s) => s.name === service.name);
        if (isServiceSelected) {
            setSelectedServices((prevServices) => prevServices.filter((s) => s.name !== service.name));
            setTotalCost((prevTotal) => prevTotal - service.price);
        }
        else {
            setSelectedServices((prevServices) => [...prevServices, service]);
            setTotalCost((prevTotal) => prevTotal + service.price);
        }
    };
    return (React.createElement("main", { className: "main" },
        React.createElement("section", { className: "leftPanel" }, services.map((service) => (React.createElement(Service, { key: service.name, name: service.name, price: service.price, icon: service.icon, descriptionLink: service.descriptionLink, videoId: service.videoId, onAdd: () => handleToggleService(service), isSelected: selectedServices.some((s) => s.name === service.name) })))),
        React.createElement("section", { className: "rightPanel" },
            React.createElement("div", { className: "prices" },
                React.createElement("h3", null,
                    "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0443\u0441\u043B\u0443\u0433 \u043D\u0430: ",
                    totalCost,
                    " \u0440\u0443\u0431.*"),
                selectedServices.length > 0 && React.createElement("hr", { className: "divider" }),
                React.createElement("div", { className: 'selected-items' }, selectedServices.map((service, index) => (React.createElement("p", { key: index },
                    service.name,
                    ": ",
                    service.price,
                    " \u0440\u0443\u0431."))))),
            React.createElement("div", { className: "read-the-docs" },
                React.createElement("p", null,
                    " ",
                    "* \u0412\u0441\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u044B \u043D\u043E\u0441\u044F\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440. \u0414\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0442\u043E\u0447\u043D\u043E\u0439 \u043E\u0446\u0435\u043D\u043A\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C",
                    React.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            openFeedbackModal();
                        } },
                        " ",
                        "\u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438")),
                React.createElement(Modal, { isOpen: isFeedbackModalOpen, onRequestClose: closeFeedbackModal, contentLabel: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C", className: "feedback-modal", overlayClassName: "feedback-modal-overlay" }, feedbackMessage ? (React.createElement("p", null, feedbackMessage)) : (React.createElement(FeedbackForm, { onSubmit: handleFeedbackSubmit })))))));
}
export default ConstructorCalculator;
