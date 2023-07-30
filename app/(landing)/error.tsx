"use client";

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: NextPage<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-white flex items-center justify-center flex-col h-screen">
      <h2>Something went wrong!</h2>
      <Button
        className="mt-2"
        variant={"secondary"}
        size={"lg"}
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
