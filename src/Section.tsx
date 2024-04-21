import './Section.scss';

function Section({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <section className="Section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;
