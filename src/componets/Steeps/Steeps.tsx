import React from "react";
import {styles} from './styles';


function Steeps(){
    return (
      <div className="full-container" style={styles.containerSteeps}>
        <div className="container-c" style={styles.rowSteeps}>
            <div style={styles.steep}>
                <div style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>1</p>
                    </div>
                    <div style={styles.dashedSteep}>

                    </div>
                </div>
                <h6 style={styles.title}>Aprobación</h6>
                <h6 style={styles.text}>Envía los documentos solicitados para obtener una aprobación</h6>
            </div>

            <div style={styles.steep}>
                <div style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>2</p>
                    </div>
                    <div style={styles.dashedSteep}>
                        
                    </div>
                </div>
                <h6 style={styles.title}>Reserva</h6>
                <h6 style={styles.text}>La propiedad que deseas para empezar el trámite de arriendo.</h6>
            </div>

            <div style={styles.steep}>
                <div style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>3</p>
                    </div>
                    <div style={styles.dashedSteep}>
                        
                    </div>
                </div>
                <h6 style={styles.title}>Contrato</h6>
                <h6 style={styles.text}>Firma el contrato y pagar la comisión junto al mes de garantía</h6>
            </div>

            <div style={styles.steep}>
                <div style={styles.rowNumbreSteep}>
                    <div style={styles.circleNumber}>
                        <p style={styles.numberText}>4</p>
                    </div>
                </div>
                <h6 style={styles.title}>Pagos mensuales</h6>
                <h6 style={styles.text}>Mes arriendo, gastos comunes y servicios básicos</h6>
            </div>         
        </div>
      </div>
    );
}

export default Steeps;
