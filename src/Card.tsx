import './Card.scss';
import React from 'react';

function Card({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Card;