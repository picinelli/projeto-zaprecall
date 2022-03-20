import "./Footer.css";

export default function Footer(props) {
    const {respondidosTotal, icones, totalTexto} = props


    function checarIcone(icone) {
        if(icone === "checkmark-circle") return <ion-icon class="resposta-verde" name={icone}></ion-icon>
        if(icone === "help-circle") return <ion-icon class="resposta-laranja" name={icone}></ion-icon>
        if(icone === "close-circle") return <ion-icon class="resposta-vermelha" name={icone}></ion-icon>
    }

    return (
        <footer>
            <p>{totalTexto}</p>
            <div className="icones-respondidos">
                {icones.map(icone => checarIcone(icone))}
            </div>
        </footer>
    )
}