"use client";

import { useState } from "react";

export default function CalculaImc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");

  const calculaImc = () => {
    const alturaMetros = parseFloat(altura.replace(",", "."));
    const pesoKg = parseFloat(peso.replace(",", "."));
    const imc = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imc);
  };

  return (
    <>
      <div>
        <label htmlFor="altura">Altura (em Metros)</label>
        <input
          type="text"
          name="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="peso">Peso (em KG)</label>
        <input
          type="text"
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <button onClick={calculaImc}>Calcular</button>

      {imc ? <h2>IMC:{imc}</h2> : <h2>IMC:</h2>}
    </>
  );
}
