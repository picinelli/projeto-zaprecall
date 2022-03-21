import "./Footer.css";

export default function Footer(props) {
    const {icones, totalTexto, descricao, reiniciarTudo} = props;


    function checarIcone(icone) {
        if(icone === "checkmark-circle") return <ion-icon class="resposta-verde" name={icone}></ion-icon>
        if(icone === "help-circle") return <ion-icon class="resposta-laranja" name={icone}></ion-icon>
        if(icone === "close-circle") return <ion-icon class="resposta-vermelha" name={icone}></ion-icon>
    }

    if (icones.length === 8) {
        return (
            <footer className="footer-resultado">
                <p>{totalTexto}</p>
                <p className="descricao">{descricao}</p>
                <div className="icones-respondidos">
                    {icones.map((icone, index) => checarIcone(icone, index))}
                </div>
                <div className="botao-reiniciar" onClick={reiniciarTudo}>
                    <p>REINICIAR RECALL</p>
                </div>
            </footer>
        )
    }

    return (
        <footer>
            <p>{totalTexto}</p>
            <p className="descricao">{descricao}</p>
            <div className="icones-respondidos">
                {icones.map(icone => checarIcone(icone))}
            </div>
        </footer>
    )
}