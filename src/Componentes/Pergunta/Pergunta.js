import {useState} from 'react'
import "./Pergunta.css"
import Virar from "../../assets/virar.svg"

export default function Pergunta(props) {
    const [RevelarCard, setRevelarCard] = useState("card escondido");
    const [CaixaOpcao, setCaixaOpcao] = useState("caixa-opcao");
    const [VirarFrente, setVirarFrente] = useState("front-face face");
    const [VirarTras, setVirarTras] = useState("back-face face");
    const [Icone, setIcone] = useState("play-outline");
    const {callback} = props

    function manterCartasViradas() {
        setVirarFrente("front-face face virar-frente-fixo")
        setVirarTras("back-face face virar-tras-fixo")
    }

    function revelarPergunta() {
        setRevelarCard("card")
        setCaixaOpcao("caixa-opcao escondido")
    }

    function responderNao() {
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-nao")
        setIcone("close-circle")
        callback(1)
    }

    function responderQuase() {
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-quase")
        setIcone("help-circle")
        callback(1)
    }

    function responderZap() {
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-zap")
        setIcone("checkmark-circle")
        callback(1)
    }

    return (
        <div className="pergunta">
            <div className={CaixaOpcao} onClick={() => revelarPergunta()}>
                <p>{props.perguntaNum}</p>
                <ion-icon name={Icone}></ion-icon>
            </div>
            <div className={RevelarCard} onClick={() => {manterCartasViradas()}} data-identifier="card">
                <div className={VirarFrente}>
                    <p>{props.perguntaTexto}</p>
                    <img src={Virar} alt="virar"></img>
                </div>
                <div className={VirarTras}>
                    <p>{props.resposta}</p>
                    <div className="resposta">
                        <div className="resposta-nao" onClick={responderNao}>Não lembrei</div>
                        <div className="resposta-quase" onClick={responderQuase}>Quase não lembrei</div>
                        <div className="resposta-zap" onClick={responderZap}>Zap!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}