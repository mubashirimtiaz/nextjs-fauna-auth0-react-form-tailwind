import Head from "next/head";
import Snippet from "../components/Snippet";
import useSWR from "swr";
import Link from "next/link";
import Header from "../components/Header";
export default function Home() {
  //TODO: use swr to retrieve snippets
  const { data: snippets } = useSWR("/api/snippets/");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <Header
            title="Errday Code Snippets"
            subtitle="Create and Browse code Snippets you can use every day in Web Development"
          />
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))}
      </main>
    </div>
  );
}
