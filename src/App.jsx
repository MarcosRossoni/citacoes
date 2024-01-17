import React, {useState} from "react";
import citacoes from "./data.js";
import Citacao from "./components/Citacao.jsx";

function App() {

    const [indice, setIndice] = useState(0)

    const proximaCitacao = () => {
        setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length)
    }
    return (
        <div className="container mt-5">
            <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor}/>
            <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima Citação</button>
        </div>
    );
}

export default App
