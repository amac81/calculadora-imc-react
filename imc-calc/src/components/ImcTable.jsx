import "./ImcTable.css"

const ImcTable = () => {
  return (
    <div id="result-container">
        <p id="imc-value">O seu IMC: <span>XX</span></p>
        <p id="imc-info">Situação atual: <span>XXX</span></p>
        <h3>Verifique as classificações:</h3>
        <div id="imc-table">
            <div className="table-header">
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Nível de Obesidade</h4>
            </div>
            <div className="table-data">
                <p>Entre 18,5 e 24,9</p>
                <p>Magreza</p>
                <p>I</p>
            </div>
        </div>

    </div>
  )
}

export default ImcTable