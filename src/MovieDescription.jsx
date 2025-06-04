import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) return <p>Movie not found.</p>;

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h2>{movie.title}</h2>
            <p><strong>Description:</strong> {movie.detailedDescription}</p>

            <div style={{ marginTop: '20px' }}>
                <iframe
                    width="100%"
                    height="400"
                    src={movie.trailer}
                    title={movie.title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            <Link to="/">
                <button style={{ marginTop: '30px' }}>⬅ Back to Home</button>
            </Link>
        </div>
    );
};

export default MovieDescription;
