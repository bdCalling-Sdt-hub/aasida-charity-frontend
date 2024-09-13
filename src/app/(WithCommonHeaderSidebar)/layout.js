import Header from "@/components/Shared/Header/Header";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Image from "next/image";
import floatingBgEffect from "/public/images/floatingline.png";
import { Divider } from "antd";

export default function CommonLayout({ children }) {
  return (
    <div className="bg-primary-white">
      <Header />

      <div className="flex-start-between relative z-10 mx-auto min-h-screen w-full items-stretch gap-x-6 overflow-hidden py-8 md:w-[90%] xl:w-[85%]">
        {/* --------- Floating Bg Effect --------- */}
        <Image
          src={floatingBgEffect}
          alt="floating bg effect"
          className="absolute -left-[400px] -top-[400px] -z-10"
        />
        {/* -------------------------------------- */}

        <div className="lg:w-[25%]">
          <Sidebar />
        </div>

        <div className="min-h-[80vh] border-l border-l-gray-300/80 px-6 lg:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
