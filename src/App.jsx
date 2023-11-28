import './App.css'
import ImcCalc from './components/ImcCalc'
import { useState } from 'react';
import {data} from './data/data'
import ImcTable from './components/ImcTable';

function App() {
  // Hooks de manipulação de dados 
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  
  const textToFloat = (text) => {
    return +text.replace(",",".");
  }

  const readData = (imcValue) => {
    data.forEach((item) => {
      if(imcValue >= item.min && imcValue <= item.max){
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

    readData(imcResult);
  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
  <div className='container'>
    {!imc ? <ImcCalc funcCalc={calcutateImc}/> : <ImcTable imcData = {data} imc = {imc} info = {info} infoClass = {infoClass} resetCalcFunc={resetCalc}/>}
  </div>
  )
}

export default App
