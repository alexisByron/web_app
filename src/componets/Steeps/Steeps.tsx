import React from "react";
import {styles} from './styles';


function Steeps(){
    return (
      <div className="full-container content-steep" style={styles.containerSteeps}>
        <div className="container-c steeps" style={styles.rowSteeps}>
            <div style={styles.steep}>
                <div className="row-number-steep" style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>1</p>
                    </div>
                    <div className="dashed-line" style={styles.dashedSteep}>

                    </div>
                </div>
                <h6 style={styles.title} className="title">Aprobación</h6>
                <h6 style={styles.text} className="description">Envía los documentos solicitados para obtener una aprobación</h6>
            </div>

            <div style={styles.steep}>
                <div className="row-number-steep" style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>2</p>
                    </div>
                    <div className="dashed-line" style={styles.dashedSteep}>
                        
                    </div>
                </div>
                <h6 style={styles.title} className="title">Reserva</h6>
                <h6 style={styles.text} className="description">La propiedad que deseas para empezar el trámite de arriendo.</h6>
            </div>

            <div style={styles.steep}>
                <div className="row-number-steep" style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>3</p>
                    </div>
                    <div className="dashed-line" style={styles.dashedSteep}>
                        
                    </div>
                </div>
                <h6 style={styles.title} className="title">Contrato</h6>
                <h6 style={styles.text} className="description">Firma el contrato y pagar la comisión junto al mes de garantía</h6>
            </div>

            <div style={styles.steep}>
                <div style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>4</p>
                    </div>
                </div>
                <h6 style={styles.title} className="title">Pagos mensuales</h6>
                <h6 style={styles.text} className="description">Mes arriendo, gastos comunes y servicios básicos</h6>
            </div>         
        </div>
      </div>
    );
}

export default Steeps;
