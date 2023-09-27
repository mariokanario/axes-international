import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Calculator = () => {
    return (
        <div className='calculator'>
            <form className="form-calc row mx-auto pt-0">
                <div className="mb-3 form-group">
                    <label for="tipo" className="form-label">Tipo de inversión</label>
                    <select id="tipo" name="">
                        <option>Básico</option>
                        <option>Inversor</option>
                        <option>Elite</option>
                    </select>
                </div>
                <div className="mb-3 form-group">
                    <label for="valor" className="form-label">Valor en USD</label>
                    <input type="number" className="form-control" id="valor" />
                </div>
                <div className="mb-3 form-group">
                    <label for="tiempo" className="form-label">Tiempo en meses</label>
                    <select name="" id="tiempo">
                        <option>6</option>
                        <option>12</option>
                        <option>18</option>
                    </select>
                </div>
                <button className='btn-style-one mb-3'>
                    Calcular
                    <FaArrowRight className='icon' />
                </button>
                <div className="mb-3 form-group">
                    <label for="rentabilidad" className="form-label">Rentabilidad</label>
                    <input type="email" className="form-control" id="rentabilidad"  />
                </div>
            </form>
        </div>
    )
}

export default Calculator