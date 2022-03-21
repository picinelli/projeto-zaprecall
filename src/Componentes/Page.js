import "../CSS Global/reset.css"
import "../CSS Global/estilo.css"

import {useState} from 'react';
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import TelaInicial from "./TelaInicial/TelaInicial"

export default function Page() {
    const [Liberacao, setLiberacao] = useState("bloqueado");
    const [respondidosTotal, setRespondidosTotal] = useState(0)
    const [totalTexto, setTotalTexto] = useState(`${respondidosTotal}/8 CONCLUÍDOS`)
    const [descricao, setDescricao] = useState("")
    const [arrayRespostas, setArrayRespostas] = useState([])

    function alterarArrayRespostas(resposta) {
        if (arrayRespostas === []) {
            setArrayRespostas([resposta])
            alterarTotal(1)
        } else {
            setArrayRespostas([...arrayRespostas, resposta])
            alterarTotal(1)
        }
        console.log(arrayRespostas)
    }

    function possuiRespostaErrada() {
        for(let i = 0; i < arrayRespostas.length; i++) {
            if(arrayRespostas[i] === "close-circle") {
                return true
            }
        }
        return false
    }

    function reiniciarTudo() {
        setLiberacao("bloqueado")
        setRespondidosTotal(0)
        setTotalTexto(`0/8 CONCLUÍDOS`)
        setDescricao("")
        setArrayRespostas([])
    }

    // Alterar funcao se for deixar o numero de cards dinamico, pois esta fixo em 8 cards.
    function alterarTotal(valor) {
        console.log(totalTexto)
        if (respondidosTotal + valor < 8) {
            setRespondidosTotal((respondidosTotal + valor))
            setTotalTexto(`${respondidosTotal + 1}/8 CONCLUÍDOS`)
        } else if (respondidosTotal + valor === 8){
            possuiRespostaErrada() ? setTotalTexto("😢  PUTZ!") : setTotalTexto("🥳 PARABÉNS!")
            possuiRespostaErrada() ? setDescricao("Ainda faltaram alguns...Mas não desanime!") : setDescricao("Você não esqueceu de nenhum flashcard!")
        }
    }

    if(Liberacao === "bloqueado") {
        return (
            <TelaInicial liberarSite={setLiberacao} />
        )
    } else if (Liberacao === "liberado") {
        return (
            <>
            <Header />
            <Main callback={(valor) => alterarTotal(valor)} alterarArrayRespostas={(resposta) => alterarArrayRespostas(resposta)} />
            <Footer descricao={descricao} icones={arrayRespostas} totalTexto={totalTexto} respondidosTotal={respondidosTotal} reiniciarTudo={reiniciarTudo} />
            </>
        )
    }
}