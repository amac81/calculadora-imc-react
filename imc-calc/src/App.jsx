import './App.css'
import ImcCalc from './components/ImcCalc'
import { useState } from 'react';

function App() {
  // Hooks de manipulação de dados 
  const [imc, setImc] = useState("");

  
  const textToFloat = (text) => {
    return +text;
  }

  const calcutateImc = (e, height, weight) => {
    e.preventDefault();
    const fHeight = textToFloat(height);
    const fWeight = textToFloat(weight);

    const imcResult = (fWeight / (fHeight * fHeight)).toFixed(1);
    setImc(imcResult);
  }

  return (
  <div className='container'>
    <ImcCalc funcCalc={calcutateImc}/>
  </div>
  )
}

export default App
