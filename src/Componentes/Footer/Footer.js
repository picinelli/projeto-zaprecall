import "./Footer.css";

export default function Footer(props) {
    const respostaCerta = <ion-icon class="resposta-certa" name="checkmark-circle"></ion-icon>
    const total = 8;
    const {respondidosTotal} = props
    const totalTexto = `${respondidosTotal}/${total} CONCLUÍDOS`


    return (
        <footer>
            <p>{totalTexto}</p>
            <div className="icones-respondidos">
                {respostaCerta}
            </div>
        </footer>
    )
}