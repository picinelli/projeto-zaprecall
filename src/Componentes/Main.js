import {useState} from 'react'

export default function Main() {

    const [RevelarCard, setRevelarCard] = useState("card escondido")
    const [CaixaOpcao, setCaixaOpcao] = useState("caixa-opcao")
    const [VirarFrente, setVirarFrente] = useState("front-face face")
    const [VirarTras, setVirarTras] = useState("back-face face")
    const [Icone, setIcone] = useState("play-outline")
    
    return (
        <main>
            <div className="pergunta">
                <div className={CaixaOpcao} onClick={() => revelarPergunta()}>
                    <p>Pergunta 1</p>
                    <ion-icon name={Icone}></ion-icon>
                </div>
                <div className={RevelarCard} onClick={() => {manterCartasViradas()}} data-identifier="card">
                    <div className={VirarFrente}>
                        <p>O que é JSX?AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                        <img src="./assets/virar.svg" alt="virar"></img>
                    </div>
                    <div className={VirarTras}>
                        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                        <div className="resposta">
                            <div className="resposta-nao" onClick={responderNao}>Não lembrei</div>
                            <div className="resposta-quase" onClick={responderQuase}>Quase não lembrei</div>
                            <div className="resposta-zap" onClick={responderZap}>Zap!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pergunta">
                <div className="caixa-opcao">
                    <p>Pergunta 2</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            <div className="pergunta">
                <div className="caixa-opcao">
                    <p>Pergunta 3</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            <div className="pergunta">
                <div className="caixa-opcao">
                    <p>Pergunta 4</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        </main>
    )
    
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
    }

    function responderQuase() {
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-quase")
        setIcone("help-circle")
    }

    function responderZap() {
        setRevelarCard("card escondido")
        setCaixaOpcao("caixa-opcao pergunta_respondida-zap")
        setIcone("checkmark-circle")
    }
}