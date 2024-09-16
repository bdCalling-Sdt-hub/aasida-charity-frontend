import Header from "@/components/Shared/Header/Header";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Image from "next/image";
import floatingBgEffect from "/public/images/floatingline.png";

export default function CommonLayout({ children }) {
  return (
    <div className="relative z-10 bg-primary-white">
      {/* --------- Floating Bg Effect --------- */}
      <Image
        src={floatingBgEffect}
        alt="floating bg effect"
        className="absolute -left-10 top-[200px] -z-10 opacity-75"
      />
      {/* -------------------------------------- */}

      <Header />

      <div className="flex-stretch-between relative z-10 mx-auto h-max min-h-screen w-full gap-x-10 py-8 md:w-[90%] xl:w-[85%]">
        <div className="sticky top-10 h-max lg:w-[25%]">
          <Sidebar />
        </div>

        <div className="min-h-[80vh] border-l border-l-gray-300/80 px-10 lg:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
