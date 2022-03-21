import Pergunta from '../Pergunta/Pergunta'
import "./Main.css"

export default function Main(props) {

    const {callback, alterarArrayRespostas} = props

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
    
    return (
        <main>
            {
                perguntas.map(pergunta => <Pergunta
                    perguntaNum={pergunta.perguntaNum}
                    perguntaTexto={pergunta.perguntaTexto}
                    resposta={pergunta.resposta}
                    key={pergunta.perguntaNum}
                    callback={callback}
                    alterarArrayRespostas={alterarArrayRespostas}
                    />)
            }
        </main>
    )
}