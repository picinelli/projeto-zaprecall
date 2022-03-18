import {useState} from 'react'

export default function Main() {

    const perguntas = [
        {
            perguntaNum: "Pergunta 1",
            perguntaTexto: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            perguntaNum: "Pergunta 2",
            perguntaTexto: "O React é __",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            perguntaNum: "Pergunta 3",
            perguntaTexto: "Componentes devem iniciar com __",
            resposta: "letra maiúscula"
        },
        {
            perguntaNum: "Pergunta 4",
            perguntaTexto: "Podemos colocar __ dentro do JSX",
            resposta: "expressões"
        },
        {
            perguntaNum: "Pergunta 5",
            perguntaTexto: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            perguntaNum: "Pergunta 6",
            perguntaTexto: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            perguntaNum: "Pergunta 7",
            perguntaTexto: "Usamos props para __",
            resposta: "passar diferentes informações para componentes "
        },
        {
            perguntaNum: "Pergunta 8",
            perguntaTexto: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ]
    perguntas.sort(comparador)
    console.log(perguntas)
    
    return (
        <main>
            {
                perguntas.map(pergunta => <Pergunta
                    perguntaNum={pergunta.perguntaNum}
                    perguntaTexto={pergunta.perguntaTexto}
                    resposta={pergunta.resposta}
                    key={pergunta.perguntaNum}
                    />)
            }
        </main>
    )

    function Pergunta(props) {

        const [RevelarCard, setRevelarCard] = useState("card escondido")
        const [CaixaOpcao, setCaixaOpcao] = useState("caixa-opcao")
        const [VirarFrente, setVirarFrente] = useState("front-face face")
        const [VirarTras, setVirarTras] = useState("back-face face")
        const [Icone, setIcone] = useState("play-outline")

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

        return (
            <div className="pergunta">
                <div className={CaixaOpcao} onClick={() => revelarPergunta()}>
                    <p>{props.perguntaNum}</p>
                    <ion-icon name={Icone}></ion-icon>
                </div>
                <div className={RevelarCard} onClick={() => {manterCartasViradas()}} data-identifier="card">
                    <div className={VirarFrente}>
                        <p>{props.perguntaTexto}</p>
                        <img src="./assets/virar.svg" alt="virar"></img>
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

    function comparador() { 
        return Math.random() - 0.5; 
    }
}