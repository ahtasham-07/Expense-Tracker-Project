import React from 'react';
import './style.css';
import ContextFunction from './context/golbalstate';

//importing components
import Header from './components/header';
import Balance from './components/balance';
import Expense from './components/inc-expense';
import History from './components/history';
import Transaction from './components/transaction';

function App() {
  return (
    <ContextFunction>
    <div className="main-div">
      <Header/>
      <Balance/>
      <Expense/>
      <History/>
      <Transaction/>
    </div>
    </ContextFunction>
  );
}

export default App;
