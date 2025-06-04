import React from 'react';

const Filter = ({ setTitle, setRating }) => {
    return (
        <div style={{ marginBottom: 20 }}>
            <input
                type="text"
                placeholder="Filter by title..."
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum rating"
                onChange={(e) => setRating(Number(e.target.value))}
                min={0}
                max={10}
            />
        </div>
    );
};

export default Filter;
