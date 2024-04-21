import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <menu>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>

                <li>
                    <a href="#demo" className="primary">
                        Live Demo
                    </a>
                </li>
            </menu>
        </header>
    );
}

export default Header;
