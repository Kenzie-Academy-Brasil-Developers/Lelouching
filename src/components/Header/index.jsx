import "./index.css"

export const Header = ({ setPage }) => {
    return (
        <header>
            <nav className="container">
                <h2 className="site-logo-home"><span className="site-logo-brand">Nu</span> Kenzie</h2>
                <button type="button" className="button-begin" onClick={setPage}>Início</button>
            </nav>
        </header>
    )
}