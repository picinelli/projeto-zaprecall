export default function TelaInicial() {
    return (
        <aside class="tela-inicial escondido">
            <div class="header-entrada">
                <img src="./assets/raio.svg" alt="raio"></img>
                <h1 class="titulo-entrada">ZapRecall</h1>
            </div>
            <div class="caixa_iniciar">
                <div class="caixa_iniciar-recall" onClick={liberarSite}>
                    <p class="iniciar-texto">Iniciar Recall!</p>
                </div>
            </div>
        </aside>  
    )

    function liberarSite() {
        let aside = document.querySelector('aside');
        aside.classList.add('escondido')
    }
}