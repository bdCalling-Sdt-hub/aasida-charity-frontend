import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.headerBg} flex-center z-20`}>
      <h3
        className="mx-auto px-5 text-center text-2xl font-extrabold text-white md:w-3/4 md:px-0 lg:w-[65%] lg:text-3xl xl:w-[60%] xl:text-4xl 2xl:w-[50%]"
        style={{ lineHeight: "1.5" }}
      >
        AN OPPORTUNITY FOR PAKISTANI STUDENTS TO OBTAIN FINANCIAL ASSISTANCE FOR
        PURSUING POST-GRADUATE STUDIES IN AUSTRALIA
      </h3>
    </div>
  );
}
