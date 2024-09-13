import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.headerBg} flex-center`}>
      <h3 className="mx-auto px-10 text-center text-4xl font-extrabold leading-relaxed text-white md:w-3/4 md:px-0 lg:w-[65%] xl:w-1/2 2xl:w-[40%]">
        AN OPPORTUNITY TO SECURE FINANCIAL ASSISTANCE FOR POST GRADUATE STUDIES
        IN AUSTRALIA
      </h3>
    </div>
  );
}
