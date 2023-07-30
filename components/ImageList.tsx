"use client";

import { IImage } from "@/types/utils.type";
import { FC, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InView } from "react-intersection-observer";

interface ImageListProps {}

const ImageList: FC<ImageListProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState<IImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=20`
        );

        const data = await res.json();

        setImageList((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="text-center">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          750: 2,
          900: 6,
        }}
      >
        <Masonry>
          {imageList.map((item) => (
            <Image
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
              width={252}
              height={item.height}
              className="p-2 rounded-2xl"
            ></Image>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <h2>{`Header inside viewport ${inView}.`}</h2>
          </div>
        )}
      </InView>

      <Button
        onClick={() => setPage((prev) => prev + 1)}
        variant={"secondary"}
        size={"lg"}
        className="w-32 mx-auto"
      >
        See more
      </Button>
    </div>
  );
};

export default ImageList;
