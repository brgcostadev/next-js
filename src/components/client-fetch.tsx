"use client";

import { useEffect, useState } from "react";

type Produto = {
  nome: string;
  id: number;
  preco: number;
};

export default function ClientFetch() {
  const [data, setData] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.origamid.online/produtos");
      const json = (await response.json()) as Produto[];
      setData(json);
      console.log("fetch Client " + json);
    }
    fetchData();
  }, []);
  return (
    <div>
      {data.map((produto) => (
        <li key={produto.id}>
          {produto.nome} R$ {produto.preco}
        </li>
      ))}
    </div>
  );
}
