import Image from "next/image";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="sticky top-0 left-0 bg-red-50">
      <div className="max-w-screen-xl mx-auto">
        <button className="flex items-center rounded-full">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={48}
            height={48}
            priority
            className="p-1.5"
          ></Image>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
