import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { EThemeNames } from '../CustomButton/enums/ECustomButton'
import { styles } from './styles'
import arrowSelect from '../../assests/img/arrow-select.svg'
import { ComunasFiltered } from '../ComunasFiltered/ComunasFiltered'

export const Filter = (props: any) => {

    const comunas = props.comunas.split('-')
    const { rooms, bathrooms } = props
    
    return (
        <div style={{width: '450px'}}>
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

            {(props.comunas.toLowerCase() != 'all') ? <ComunasFiltered comunas={comunas} /> : <div className="mt-3"></div> }


            <div className="divider" style={{borderBottom: '1px solid rgba(0,0,0, .22)', width: '100%'}}></div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Habitaciones</div>
                <div className="quantity" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '10px'}}>
                    <a href="#" className="item-quantity" style={(rooms == '1') ? styles.itemQuantityActive : styles.itemQuantity}>1</a>
                    <a href="#" className="item-quantity" style={(rooms == '2') ? styles.itemQuantityActive : styles.itemQuantity}>2</a>
                    <a href="#" className="item-quantity" style={(rooms == '3') ? styles.itemQuantityActive : styles.itemQuantity}>3</a>
                    <a href="#" className="item-quantity" style={(rooms == '4') ? styles.itemQuantityActive : styles.itemQuantity}>4</a>
                    <a href="#" className="item-quantity" style={(rooms == '5+') ? styles.itemQuantityActive : styles.itemQuantity}>5+</a>
                </div>
            </div>
            <div className="divider" style={{borderBottom: '1px solid rgba(0,0,0, .22)', width: '100%'}}></div>
            <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
                <div className="title" style={{fontWeight: 500, fontSize: '16px'}}>Baños</div>
                <div className="quantity" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '10px'}}>
                <a href="#" className="item-quantity" style={(bathrooms == '1') ? styles.itemQuantityActive : styles.itemQuantity}>1</a>
                    <a href="#" className="item-quantity" style={(bathrooms == '2') ? styles.itemQuantityActive : styles.itemQuantity}>2</a>
                    <a href="#" className="item-quantity" style={(bathrooms == '3') ? styles.itemQuantityActive : styles.itemQuantity}>3</a>
                    <a href="#" className="item-quantity" style={(bathrooms == '4') ? styles.itemQuantityActive : styles.itemQuantity}>4</a>
                    <a href="#" className="item-quantity" style={(bathrooms == '5+') ? styles.itemQuantityActive : styles.itemQuantity}>5+</a>
                </div>
            </div>

            <div className="content-button-filter mt-4" style={{width: '100px', marginLeft: 'auto'}}>
                <CustomButton text="Aplicar" theme={EThemeNames.Primary} onClick={() => console.log('aaa')}  />
            </div>
        </div>
    )
}
