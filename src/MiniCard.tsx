import './MiniCard.scss';

function MiniCard({ title, items }: { title: string; items: string[] }) {
    return (
        <article className="MiniCard">
            <h3>{title}</h3>
            <ul>
                {items.map((item) => (<li>{item}</li>))}
            </ul>
        </article>
    );
}

export default MiniCard;