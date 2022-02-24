import React from "react";


import Identificacao from "./Indentificacao";
import Child from "./components/Child";
import Navegacao from "./components/Nagacao";
import Servicos from "./components/Servicos";
import Home from "./components/Home";
import Contatos from "./components/Contatos";

import { BrowserRouter as Router, Routes, Switch, Route} from 'react-router-dom';

class App extends React.Component{

  state = {
    nome: "Lucas",
    sobrenome: "Souza",
    idade: "22"
  }

  AltNome = () =>{
    this.setState({
        nome: "Kaique"
    })
}
  
  Alterar = () =>{
    this.setState({
      idade: "20"
    })
  }

  render(){
    return(
      <Router>
          <div>
              <p className="font">Componente Principal</p>
              <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome} />
              <button onClick={this.Alterar} className="font">Idade</button>
              <hr />
              <button onClick={this.AltNome} className="font">Nome</button>
              <hr />
              <Child idade={this.state.idade} nome={this.state.nome} AltN={this.AltNome} />
              <Navegacao />

              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/servicos" element={<Servicos />}></Route>
                <Route path="/contatos" element={<Contatos />}></Route>
              </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
