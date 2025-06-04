import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, posterURL, rating: parseFloat(rating) });
        setTitle('');
        setDescription('');
        setPosterURL('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL" required />
            <input value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" type="number" min={0} max={10} step="0.1" required />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
