import './CardCell.scss';

function CardCell({ title, items }: { title: string; items: string[] }) {
    return (
        <article className="CardCell">
            <h3>{title}</h3>
            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default CardCell;
