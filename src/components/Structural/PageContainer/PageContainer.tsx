import React from "react";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import classNames from "classnames";

import styles from "./PageContainer.module.css";

import { Frank_Ruhl_Libre } from "@next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  const navItems = [
    {
      display: "Home",
      linkTo: "/",
    },
    {
      display: "Projects & Experience",
      linkTo: "/experience",
    },
    {
      display: "Contact Me",
      linkTo: "/contact",
    },
  ];

  return (
    <>
      <div className={styles.pageContent}>
        <div className={styles.headerContainer}>
          <span className={classNames(styles.name, frankRuhlLibre.className)}>
            Jory Shilmover
          </span>
          <Navbar navItems={navItems} />
        </div>
        <div className={styles.children}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
