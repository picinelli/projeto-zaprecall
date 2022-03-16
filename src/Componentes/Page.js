import TelaInicial from "./TelaInicial"
import Header from "./Header"

export default function Page() {
    return (
        <>
        <TelaInicial />
        <Header />
        <main>
            <div class="caixa-opcao">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div class="caixa-opcao">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div class="caixa-opcao">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div class="caixa-opcao">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </main>
        <footer>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
        </>
    )
}