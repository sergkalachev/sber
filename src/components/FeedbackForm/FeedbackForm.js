// FeedbackForm.tsx
import React, { useState } from 'react';
const FeedbackForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, description);
        setEmail('');
        setDescription('');
    };
    return (React.createElement("form", { onSubmit: handleSubmit, className: "feedback-form" },
        React.createElement("label", null,
            "Email:",
            React.createElement("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })),
        React.createElement("label", null,
            "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:",
            React.createElement("textarea", { value: description, onChange: (e) => setDescription(e.target.value), required: true })),
        React.createElement("button", { type: "submit" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));
};
export default FeedbackForm;
