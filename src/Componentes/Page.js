import {useState} from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Page() {
    const [Liberacao, setLiberacao] = useState("bloqueado")

    function liberarSite(mensagem) {
        setLiberacao(mensagem)
    }

    if(Liberacao === "bloqueado") {
        return (
            <aside className="tela-inicial">
                <div className="header-entrada">
                    <img src="./assets/raio.svg" alt="raio"></img>
                    <h1 className="titulo-entrada">ZapRecall</h1>
                </div>
                <div className="caixa_iniciar">
                    <div className="caixa_iniciar-recall" onClick={() => liberarSite("liberado")}>
                        <p className="iniciar-texto">Iniciar Recall!</p>
                    </div>
                </div>
            </aside>  
        )
    } else if (Liberacao === "liberado") {
        return (
            <>
            <Header />
            <Main />
            <Footer />
            </>
        )
    }
}