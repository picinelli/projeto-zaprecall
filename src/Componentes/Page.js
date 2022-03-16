import TelaInicial from "./TelaInicial"
import Header from "./Header"

export default function Page() {
    return (
        <>
        <TelaInicial />
        <Header />
        <main>
            <div className="pergunta">
                <div className="caixa-opcao" onClick={() => revelarPergunta()}>
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="card escondido" onClick={() => {manterCartasViradas()}} data-identifier="card">
                    <div className="front-face face" data-identifier="back-face">
                        <p>O que é JSX?AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                        <img src="./assets/virar.svg" alt="virar"></img>
                    </div>
                    <div className="back-face face" data-identifier="front-face">
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
        <footer>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
        </>
    )

    function manterCartasViradas() {
        let carta = document.querySelector('.card')
        carta.querySelector('.front-face').classList.add('virar-frente-fixo');
        carta.querySelector('.back-face').classList.add('virar-tras-fixo');
    }

    function revelarPergunta() {
        document.querySelector('.card').classList.remove('escondido')
        document.querySelector('.caixa-opcao').classList.add('escondido')
    }

    function responderNao() {
        const perguntaRespondida = document.querySelector('.caixa-opcao')
        perguntaRespondida.classList.remove('escondido')
        document.querySelector('.card').classList.add('escondido')
        document.querySelector('.caixa-opcao ion-icon').setAttribute('name', "close-circle")

        perguntaRespondida.classList.remove('pergunta_respondida-zap')
        perguntaRespondida.classList.remove('pergunta_respondida-quase')
        perguntaRespondida.classList.add('pergunta_respondida-nao')
    }

    function responderQuase() {
        const perguntaRespondida = document.querySelector('.caixa-opcao')
        perguntaRespondida.classList.remove('escondido')
        document.querySelector('.card').classList.add('escondido')
        document.querySelector('.caixa-opcao ion-icon').setAttribute('name', "help-circle")

        perguntaRespondida.classList.remove('pergunta_respondida-zap')
        perguntaRespondida.classList.remove('pergunta_respondida-nao')
        perguntaRespondida.classList.add('pergunta_respondida-quase')
    }

    function responderZap() {
        const perguntaRespondida = document.querySelector('.caixa-opcao')
        perguntaRespondida.classList.remove('escondido')
        document.querySelector('.card').classList.add('escondido')
        document.querySelector('.caixa-opcao ion-icon').setAttribute('name', "checkmark-circle")

        perguntaRespondida.classList.remove('pergunta_respondida-quase')
        perguntaRespondida.classList.remove('pergunta_respondida-nao')
        perguntaRespondida.classList.add('pergunta_respondida-zap')
    }
}