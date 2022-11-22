import "./index.css"
import logoSite from "../../assets/illustration.svg"

export const Begin = ({ setPage }) => {
    return (
        <main className="main-begin">
            <div className="container div-content">
                <div className="div-content-part-1">
                    <h2 className="site-logo"><span className="site-logo-brand">Nu</span> Kenzie</h2>
                    <span className="site-description-1">Centralize o controle das suas finanças</span>
                    <span className="site-description-2">de forma rápida e segura</span>
                    <button type="button" className="button-start" onClick={setPage}>Iniciar</button>
                </div>
                <img className="site-image-logo" src={logoSite} alt="Imagem logo do site Nu Kenzie" />
            </div>
        </main>
    )
}