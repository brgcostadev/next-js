"use client";

import React, { useEffect, useState } from "react";

export default function Width() {
  const [width, setWidth] = useState(
    () => document.documentElement.clientWidth
  );
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2 style={{ color: ativo ? "#680" : "#b00" }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivo((ativo) => !ativo)}>Ativar</button>
    </div>
  );
}
