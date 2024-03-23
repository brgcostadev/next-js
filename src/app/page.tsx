import ServerFetch from "@/components/server-fetch";

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ServerFetch />
    </main>
  );
}
