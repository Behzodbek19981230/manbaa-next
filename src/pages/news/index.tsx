import { newsData } from "@/config/data";
import { NewsType } from "@/config/types";
import Head from "next/head";

export default function Page() {
  const data = newsData;
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      {data.map((item: NewsType) => (
        <p>
          {item.title} {item.user.fullName}
        </p>
      ))}
    </>
  );
}
