import "./ImcTable.css"

const ImcTable = ({imcData, imc, info, infoClass}) => {
  return (
    <div id="result-container">
        <p id="imc-value">O seu IMC: <span className={infoClass}>{imc}</span></p>
        <p id="imc-info">Situação atual: <span className={infoClass}>{info}</span></p>
        <h3>Verifique as classificações:</h3>
        <div id="imc-table">
            <div className="table-header">
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Obesidade</h4>
            </div>
                {imcData.map((item) => (
                    <div key={item.info} className="table-data">
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p>{item.obesityDegree}</p>
                    </div>
                ))}
        </div>

    </div>
  )
}

export default ImcTable