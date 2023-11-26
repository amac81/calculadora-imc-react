import { useState } from "react";
import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = () => {
  // Hooks de manipulação de dados 
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const resetCalc = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");

    console.log("cleaning")
  }

  const calcImc = (e) => {
    e.preventDefault();

    console.log("calculating...")
  }

  const inputValidate = (text) =>{
    const convertedText = text.replace(/[^0-9,]/g, ""); // digitos de 0 a 9 e a vírgula, todas as ocorrências na string
    return convertedText;
  }

  const handleHeightChange = (e) => {
    const heigthtOk = inputValidate(e.target.value);
    setHeight(heigthtOk);
  }

  const handleWeightChange = (e) => {
    const weigthtOk = inputValidate(e.target.value);
    setWeight(weigthtOk);
  }
    
  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div id="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">A sua altura:</label>
                    <input 
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Exemplo: 1,76" 
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">O seu peso:</label>
                    <input 
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Exemplo: 68" 
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
            </div>
            <div className="action-control">
                <Button id = "btn-calc" text = "Calcular" action = {calcImc}/>
                <Button id = "btn-clear" text = "Limpar" action = {resetCalc}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc