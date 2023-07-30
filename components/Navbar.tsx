import Image from "next/image";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Search, XCircle } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="sticky top-0 left-0 bg-[#172035] shadow-xl py-2 px-3">
      <div className="flex items-center gap-4 mx-auto">
        <button className="flex items-center rounded-full">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={48}
            height={48}
            priority
            className="p-1.5"
          ></Image>
        </button>
        <div className="flex items-center flex-1 px-2 bg-gray-300 rounded-full">
          <Search></Search>
          <Input
            type="text"
            placeholder="Search"
            className="w-full border-0 rounded-full outline-none bg-inherit focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          ></Input>
          <button>
            <XCircle />
          </button>
        </div>
        <div>
          <UserButton afterSignOutUrl="/home"></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
