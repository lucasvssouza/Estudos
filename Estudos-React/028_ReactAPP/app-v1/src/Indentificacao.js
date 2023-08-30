import React, { Component } from 'react'

export default class Indentificacao extends Component {
  render() {
    return (
      <div>
        <p className="font">Nome: {this.props.nome}</p>
        <p className="font">Sobrenome: {this.props.sobrenome}</p>
      </div>
    )
  }
}
