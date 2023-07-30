import ImageList from "@/components/ImageList";
import { NextPage } from "next";

interface HomeProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  return (
    <main className="flex flex-col bg-[#111827] text-white px-3 py-2">
      <ImageList></ImageList>
    </main>
  );
};

export default Home;
