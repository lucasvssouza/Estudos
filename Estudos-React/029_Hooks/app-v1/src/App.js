import './App.css'
import React, {useState} from 'react'

const App = () =>{

  const AltNome1 = () => setNome('Lucas')

  const[Nome, setNome] = useState ('Lucas')
  
  const AltNome2 = () => setNome('Natacha')

  return(
    <div>
      <h1 className='title'>Teste de Hooks</h1>
      <main className='box'>
        <p className='text'>O meu nome é: {Nome}</p>
        <section>
          <button onClick={() => AltNome1()}>Alterar Lucas</button>
          <button onClick={() => setNome('Kaique')}>Alterar Kaique</button>
          <button onClick={() => AltNome2()}>Alterar Natacha</button>
        </section>
      </main>
    </div>
  )
}

export default App