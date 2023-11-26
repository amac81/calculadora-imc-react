import "./ImcCalc.css"

const ImcCalc = () => {
    
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
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">O seu peso:</label>
                    <input 
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Exemplo: 68" 
                    />
                </div>
            </div>
            <div className="action-control">
                <button>Calcular</button>
                <button>Limpar</button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc