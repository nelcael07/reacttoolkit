import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/Stock.store';
import { RootState } from './store/index';
// IMPORTANDO FUNÇÃO ASYNC PARA PEGAR DADOS DA API
// import asyncIncrement from './store/Stock.store'

function App() {
  const dispath = useDispatch()
  const stock = useSelector( (state: RootState) => state.stock)

  // EXECUTAR O DISPATH DENTRO DO USEEFFECT
  // useEffect(() => {
  //   dispath(asyncIncrement)
  // }, []);
  return (
    <div className="App">
      {stock.counter}
      <button onClick={() => dispath(increment(1))}> somar</button>
      <button onClick={() => dispath(decrement())}>subtrair</button>
    </div>
  );
}

export default App;
