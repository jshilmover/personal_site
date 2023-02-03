import React from "react";
import Navbar from "@/components/Navigation/Navbar";
import classNames from "classnames";

import styles from "./Header.module.css";

import { Frank_Ruhl_Libre } from "@next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  const navItems = [
    {
      display: "Home",
      linkTo: "/",
    },
    {
      display: "Education",
      linkTo: "/education",
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
      <div className={styles.headerContainer}>
        <span className={classNames(styles.name, frankRuhlLibre.className)}>
          Jory Shilmover
        </span>
        <Navbar navItems={navItems} />
      </div>
      <div>{children}</div>
    </>
  );
};
