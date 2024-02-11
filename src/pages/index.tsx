import Banner from "@/components/Home/Banner";
import Posts from "@/components/Home/posts";
import api from "@/api/api";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Home(props: any) {
  return (
    <main className="mx-auto max-w-7xl bg-gray-100 px-4">
      <Banner />
      <Posts posts={props.posts} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const session = await getSession(context);

  console.log(process.env.BASE_URL);

  const posts = await api
    .get("posts", { headers: { Authorization: `Bearer ${session?.token}` } })
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      posts,
    },
  };
};
