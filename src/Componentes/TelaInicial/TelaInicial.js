import "./TelaInicial.css"
import Raio from "../../assets/raio.svg"

export default function TelaInicial(props) {


    return (
        <aside className="tela-inicial">
            <div className="header-entrada">
                <img src={Raio} alt="raio"></img>
                <h1 className="titulo-entrada">ZapRecall</h1>
            </div>
            <div className="caixa_iniciar">
                <div className="caixa_iniciar-recall" onClick={() => props.liberarSite("liberado")}>
                    <p className="iniciar-texto">Iniciar Recall!</p>
                </div>
            </div>
        </aside>  
    )
}