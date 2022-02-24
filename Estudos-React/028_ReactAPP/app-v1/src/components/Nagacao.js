import React from "react";
import {Link} from "react-router-dom";

const Navegacao = () =>{
    return(
        <div>
            <a href="/" className="font">Home</a> |
            <Link to="/servicos" className="font">Servicos</Link> |
            <a href="/contatos" className="font">Contatos</a> 
        </div>
    )
}

export default Navegacao;