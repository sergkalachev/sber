// FeedbackForm.tsx
import React, { useState } from 'react';

type FeedbackFormProps = {
  onSubmit: (email: string, description: string) => void;
};

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, description);
    setEmail('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Описание:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;