"use client";

import { persistor, store } from "@/redux/store";
import { antTheme } from "@/theme/AntTheme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Provider({ children }) {
  return (
    <ConfigProvider theme={antTheme}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AntdRegistry>{children}</AntdRegistry>
        </PersistGate>
      </ReduxProvider>
    </ConfigProvider>
  );
}
