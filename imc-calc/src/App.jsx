import './App.css'
import ImcCalc from './components/ImcCalc'
import { useState } from 'react';
import {data} from './data/data'

function App() {
  // Hooks de manipulação de dados 
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  
  const textToFloat = (text) => {
    return +text.replace(",",".");
  }

  const readData = () => {
    data.forEach((item) => {
      if(imc >= item.min && imc <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  }

  const calcutateImc = (e, height, weight) => {
    e.preventDefault();

    if(!height || !weight) { return; }

    const fHeight = textToFloat(height);
    const fWeight = textToFloat(weight);

    const imcResult = (fWeight / (fHeight * fHeight)).toFixed(1);
    setImc(imcResult);

    readData();

    console.log(`IMC = ${imc}`)
}

  return (
  <div className='container'>
    <ImcCalc funcCalc={calcutateImc}/>
  </div>
  )
}

export default App
