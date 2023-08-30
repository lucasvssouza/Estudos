import React, { Component } from 'react';
import '../App.css';

class Child extends Component {

    AltNome = () =>{
        this.props.AltN()
    }
    
    render() {
        return (
            <div>
                <h3 className="cor-vermelho">Idade: {this.props.idade}</h3>
                <h3 className="cor-verde">Nome: {this.props.nome}</h3>
            </div>
        );
    }
}

export default Child;