import "./Header.css"
import Raio from "../../assets/raio.svg"

export default function Header() {
    return (
        <header>
            <div className="header-principal">
                <img src={Raio} alt="raio"></img>
                <h1 className="titulo-principal">ZapRecall</h1>
            </div>
        </header>
    )
}