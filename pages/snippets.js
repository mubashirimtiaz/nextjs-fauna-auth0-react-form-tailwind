import useSWR from "swr";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Header from "../components/Header";
import Snippet from "../components/Snippet";

const Snippets = () => {
  const { data: snippets } = useSWR("/api/my-snippets");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="my-12">
          <Header title="My Code Snippets" />
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))}
      </main>
    </div>
  );
};

export default Snippets;

export const getServerSideProps = withPageAuthRequired();
