import React from "react";
import styles from "./auth.module.css";
import { ConfigProvider } from "antd";

export default function AuthLayout({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#ffffff",
          },
        },
      }}
    >
      <div className={`${styles.authBg} border-red flex-center min-h-screen`}>
        <div className="w-[90%] py-10 md:w-[75%] lg:w-[60%] xl:w-[45%]">
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}
