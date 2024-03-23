import ClientFetch from "@/components/client-fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Esta é a página contato",
};

export default function ContatoPage() {
  return (
    <main>
      {" "}
      <h2>Contato</h2>
      <ClientFetch />
    </main>
  );
}
