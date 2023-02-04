import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import styles from "./Navbar.module.css";

type NavProps = {
  navItems: {
    display: string;
    linkTo: string;
  }[];
};

export const Navbar = ({ navItems }: NavProps) => {
  const { pathname } = useRouter();

  return (
    <BootstrapNavbar expand className={styles.navbarContainer}>
      <Nav>
        {navItems.map((item, i) => (
          <Nav.Item key={i}>
            <Nav.Link
              as={Link}
              href={item.linkTo}
              disabled={pathname == item.linkTo}
            >
              <span
                className={classNames(
                  styles.navItem,
                  pathname == item.linkTo ? styles.navItemDisabled : "",
                )}
              >
                {item.display}
              </span>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </BootstrapNavbar>
  );
};
