import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        detailedDescription: '',
        posterURL: '',
        rating: 0,
        trailer: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newMovie);
        setNewMovie({
            title: '',
            description: '',
            detailedDescription: '',
            posterURL: '',
            rating: 0,
            trailer: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={newMovie.title} onChange={handleChange} placeholder="Title" />
            <input name="description" value={newMovie.description} onChange={handleChange} placeholder="Short Description" />
            <input name="detailedDescription" value={newMovie.detailedDescription} onChange={handleChange} placeholder="Detailed Description" />
            <input name="posterURL" value={newMovie.posterURL} onChange={handleChange} placeholder="Poster URL" />
            <input name="trailer" value={newMovie.trailer} onChange={handleChange} placeholder="Trailer URL" />
            <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} placeholder="Rating" min={0} max={10} />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
