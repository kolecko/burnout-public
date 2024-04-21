import { ReactNode } from 'react';

import './Card.scss';

function Card({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <div className="content">{children}</div>
        </div>
    );
}

export default Card;
