import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { EThemeNames } from '../CustomButton/enums/ECustomButton'
import { InlineIcon } from '@iconify/react';
import baselineClose from '@iconify/icons-ic/baseline-close';
import { styles } from './styles'
import arrowSelect from '../../assests/img/arrow-select.svg'

export const Filter = () => {
    return (
        <div style={{width: '450px', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}}>
            <div className="head-filter mb-4" style={{textAlign: 'center', fontSize: '16px', fontWeight: 500, width: '318px', marginRight: 'auto', marginLeft: 'auto'}}>
                Aplica filtros para encontrar la propiedad que buscas
            </div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 pb-1">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Comunas</div>
                <div className="quantity">
                    <select name="comunas" id="comunas" className="select-filter" style={{background: 'url("'+arrowSelect+'") no-repeat 98%'}}>
                        <option value="">Buscar comuna...</option>
                    </select>
                </div>
            </div>
            <div className="comunas-filtradas d-flex mb-2 mt-2 flex-wrap">
                <div className="item-comuna px-2" style={{borderRadius: '2px', background: '#3268AE', height: '20px', lineHeight: '17px', marginRight: '10px', marginBottom: '10px'}}>
                    <span className="mr-2" style={{fontSize: '11px', fontWeight: 500, color: '#fff'}}>Macul</span>
                    <InlineIcon icon={baselineClose} style={{color: '#ffffff', fontSize: '12px'}} />
                </div>

                <div className="item-comuna px-2" style={{borderRadius: '2px', background: '#3268AE', height: '20px', lineHeight: '17px', marginRight: '10px', marginBottom: '10px'}}>
                    <span className="mr-2" style={{fontSize: '11px', fontWeight: 500, color: '#fff'}}>Estación Central</span>
                    <InlineIcon icon={baselineClose} style={{color: '#ffffff', fontSize: '12px'}} />
                </div>

                <div className="item-comuna px-2" style={{borderRadius: '2px', background: '#3268AE', height: '20px', lineHeight: '17px', marginRight: '10px', marginBottom: '10px'}}>
                    <span className="mr-2" style={{fontSize: '11px', fontWeight: 500, color: '#fff'}}>Providencia</span>
                    <InlineIcon icon={baselineClose} style={{color: '#ffffff', fontSize: '12px'}} />
                </div>

                <div className="item-comuna px-2" style={{borderRadius: '2px', background: '#3268AE', height: '20px', lineHeight: '17px', marginRight: '10px', marginBottom: '10px'}}>
                    <span className="mr-2" style={{fontSize: '11px', fontWeight: 500, color: '#fff'}}>Conchalí</span>
                    <InlineIcon icon={baselineClose} style={{color: '#ffffff', fontSize: '12px'}} />
                </div>

                <div className="item-comuna px-2" style={{borderRadius: '2px', background: '#3268AE', height: '20px', lineHeight: '17px', marginRight: '10px', marginBottom: '10px'}}>
                    <span className="mr-2" style={{fontSize: '11px', fontWeight: 500, color: '#fff'}}>Huechuraba</span>
                    <InlineIcon icon={baselineClose} style={{color: '#ffffff', fontSize: '12px'}} />
                </div>
            </div>
            <div className="divider" style={{borderBottom: '1px solid rgba(0,0,0, .22)', width: '100%'}}></div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Habitaciones</div>
                <div className="quantity" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '10px'}}>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>1</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantityActive}>2</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>3</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>4</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>5+</a>
                </div>
            </div>
            <div className="divider" style={{borderBottom: '1px solid rgba(0,0,0, .22)', width: '100%'}}></div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Baños</div>
                <div className="quantity" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '10px'}}>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>1</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantityActive}>2</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>3</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>4</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>5+</a>
                </div>
            </div>
            <div className="divider" style={{borderBottom: '1px solid rgba(0,0,0, .22)', width: '100%'}}></div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Estacionamientos</div>
                <div className="quantity" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '10px'}}>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>1</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantityActive}>2</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>3</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>4</a>
                    <a href="#" className="item-quantity" style={styles.itemQuantity}>5+</a>
                </div>
            </div>

            <div className="content-button-filter mt-4" style={{width: '100px', marginLeft: 'auto'}}>
                <CustomButton text="Aplicar" theme={EThemeNames.Primary} onClick={() => console.log('aaa')}  />
            </div>
        </div>
    )
}
