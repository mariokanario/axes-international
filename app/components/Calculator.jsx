import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CurrencyInput from "react-currency-input-field";

const Calculator = () => {
  const types = [
    { name: "Básico", percentage: 0.14, min: 400, max: 4999 },
    { name: "Inversor", percentage: 0.1, min: 5000, max: 9999 },
    { name: "Elite", percentage: 0.07, min: 10000 },
  ];

  const [value, setValue] = useState();
  const [type, setType] = useState("Básico");
  const [rentability, setRentability] = useState();

  const makeRentability = () => {
    if (type) {
      const findPercentage = types.find((e) => e.name == type);
      if (findPercentage) {
        if(value < findPercentage?.min || value > findPercentage?.max){
            alert(`El valor no aplica para el paquete seleccionado, de estar entre $${findPercentage?.min} $${findPercentage?.max}`);
            return;
        }
        setRentability(Math.round(value * findPercentage?.percentage) );
      }
    }
  };

  return (
    <div className="calculator">
      <form className="form-calc row mx-auto pt-0">
        <div className="mb-3 form-group">
          <label for="tipo" className="form-label">
            Tipo de inversión
          </label>
          <select id="tipo" name="" onChange={(e) => setType(e.target.value)}>
            <option>Básico</option>
            <option>Inversor</option>
            <option>Elite</option>
          </select>
        </div>
        <div className="mb-3 form-group">
          <label for="valor" className="form-label">
            Valor en USD
          </label>
          <CurrencyInput
            id="input-example"
            name="input-name"
            className="form-control"
            allowDecimals={false}
            decimalsLimit={1}
            prefix={"$"}
            onValueChange={(value, name) => setValue(value)}
          />
        </div>
        {/* <div className="mb-3 form-group">
          <label for="tiempo" className="form-label">
            Tiempo en meses
          </label>
          <select name="" id="tiempo">
            <option>6</option>
            <option>12</option>
            <option>18</option>
          </select>
        </div> */}
        <button
          type="button"
          onClick={makeRentability}
          className="btn-style-one mb-3"
        >
          Calcular
          <FaArrowRight className="icon" />
        </button>
        <div className="mb-3 form-group">
          <label for="rentabilidad" className="form-label">
            Rentabilidad mensual
          </label>
          <CurrencyInput
            id="input-example"
            name="input-name"
            value={rentability}
            className="form-control"
            allowDecimals={false}
            decimalsLimit={1}
            prefix={"$"}
            onValueChange={(value, name) => setValue(value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
