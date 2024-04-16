import Head from "next/head";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <h1>My {router.query?.id} page</h1>
    </>
  );
}
