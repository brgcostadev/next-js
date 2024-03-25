"use client";

import React, { useEffect, useState } from "react";

type Acao = {
  nome: string;
  atualizada: string;
};

export default function AcoesPage() {
  const [acao, setAcao] = useState<Acao | null>(null);

  useEffect(() => {
    fetch("https://api.origamid.online/acoes/lua")
      .then((response) => response.json())
      .then((json) => setAcao(json));
  }, []);

  if (acao === null) return null;

  return (
    <main>
      <h1>Ações</h1>
      <p>{acao.nome}</p>
      <p>{acao.atualizada}</p>
    </main>
  );
}
