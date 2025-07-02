import React from 'react';
import './index.scss'

const LandscapeCards = () => {
    const cardData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        location: 'Vancouver Mountains, Canada',
        title: 'Mettlesemi™ Vishwaas '
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        location: 'Poon Hill, Nepal',
        title: 'Infinited'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
        location: 'Bojcin Forest, Serbia',
        title: 'μDAQ'
    }
    ];

    return (
    <div className="LandscapeCards_container">
        <div className="card__container">
        {cardData.map((card) => (
            <article key={card.id} className="card__article">
            <img 
                src={card.image} 
                alt={card.title} 
                className="card__img"
            />
            <div className="card__data">
                <span className="card__description">{card.location}</span>
                <h2 className="card__title">{card.title}</h2>
                <a href="#" className="card__button">Read More</a>
            </div>
            </article>
        ))}
        </div>
    </div>
    );
};

export default LandscapeCards;