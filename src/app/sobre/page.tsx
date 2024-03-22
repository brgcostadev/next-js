import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Esta é a página sobre",
};

export default function SobrePage() {
  return (
    <main>
      {" "}
      <h2>Sobre</h2>
      <h2 id="empresa" style={{ margin: "1600px 0" }}>
        Testando
      </h2>
    </main>
  );
}
