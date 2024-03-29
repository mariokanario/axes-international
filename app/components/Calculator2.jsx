import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import CurrencyInput from "react-currency-input-field";

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1
});
const Calculator = () => {
  const types = [
    { name: "Básico", percentage: 0.14, min: 400, max: 4999 },
    { name: "Inversor", percentage: 0.1, min: 5000, max: 9999 },
    { name: "Elite", percentage: 0.07, min: 10000 },
  ];



  /*   const [value, setValue] = useState();
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
    }; */

  const [valueRatio, setValueRatio] = useState(400)
  const [type, setType] = useState("Básico");
  const [percentage, setPercentage] = useState(10);
  const [rentability, setRentability] = useState();


  useEffect(() => {
    if (valueRatio >= 400 && valueRatio <= 4999) {
      setType("Básico")
      setPercentage(10)
    } else if (valueRatio >= 5000 && valueRatio <= 9999) {
      setType("Inversor")
      setPercentage(7)
    } else if (valueRatio >= 10000) {
      setType("Élite")
      setPercentage(5)
    }

    setRentability(numberFormat.format(Math.round(valueRatio * (percentage/100))))
  }, [valueRatio])



  return (
    <div className="calculator">
      <div className="form-calc row mx-auto pt-0">
        <div className="d-flex justify-content-between">
          <div className={`calc-type ${type == "Básico" ? "calc-type-active range-c1" : null}`}>Básico</div>
          <div className={`calc-type ${type == "Inversor" ? "calc-type-active range-c2" : null}`}>Inversor</div>
          <div className={`calc-type ${type == "Élite" ? "calc-type-active range-c3" : null}`}>Élite</div>
        </div>
        <input
          className={`mt-5 ${type == "Básico"
            ?
            "range-c1"
            : type == "Inversor"
              ?
              "range-c2"
              : type == "Élite"
                ?
                "range-c3"
                :
                null}`}
          type="range"
          min="400"
          max="20000"
          value={valueRatio}
          onChange={(e) => (
            setValueRatio(e.target.value)
          )}
        />
        <div className="w-100 d-flex justify-content-between mt-5">
          <div className="txt-range">
            <p>Capital a invertir</p>
            <h3> {valueRatio >= 20000 && "+"}{numberFormat.format(valueRatio.toLocaleString())} <small style={{fontSize: 12}}>USDT</small></h3>
          </div>
          <div className="txt-range">
            <p>Rentabilidad mensual</p>
            <h3 className="fw-bold">{rentability} <small style={{fontSize: 12}} className="fw-light">USDT </small></h3>
            <p>Porcentaje {percentage} %</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
