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

    function alterarTotal(valor) {
        setRespondidosTotal(respondidosTotal + valor)
    }

    if(Liberacao === "bloqueado") {
        return (
            <TelaInicial liberarSite={setLiberacao} />
        )
    } else if (Liberacao === "liberado") {
        return (
            <>
            <Header />
            <Main callback={(valor) => alterarTotal(valor)} />
            <Footer respondidosTotal={respondidosTotal} />
            </>
        )
    }
}