export default function TelaInicial() {
    return (
        <aside className="tela-inicial escondido">
            <div className="header-entrada">
                <img src="./assets/raio.svg" alt="raio"></img>
                <h1 className="titulo-entrada">ZapRecall</h1>
            </div>
            <div className="caixa_iniciar">
                <div className="caixa_iniciar-recall" onClick={liberarSite}>
                    <p className="iniciar-texto">Iniciar Recall!</p>
                </div>
            </div>
        </aside>  
    )

    function liberarSite() {
        let aside = document.querySelector('aside');
        aside.classList.add('escondido')
    }
}