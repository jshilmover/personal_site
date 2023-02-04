// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Header from "@/components/Structural/Header";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
