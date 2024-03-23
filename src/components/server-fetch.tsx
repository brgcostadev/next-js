type Produto = {
  nome: string;
  id: number;
  preco: number;
};

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos");
  const data = (await response.json()) as Produto[];
  console.log(data);
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
