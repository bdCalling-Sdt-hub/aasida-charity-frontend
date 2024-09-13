import { antTheme } from "@/theme/AntTheme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

export default function Provider({ children }) {
  return (
    <ConfigProvider theme={antTheme}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
}
