import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

type NavProps = {
  navItems: {
    display: string;
    linkTo: string;
  }[];
};

export const Navbar = ({ navItems }: NavProps) => {
  const { pathname } = useRouter();

  return (
    <BootstrapNavbar expand>
      <Nav variant="tabs">
        {navItems.map((item, i) => (
          <Nav.Item key={i}>
            <Nav.Link
              as={Link}
              href={item.linkTo}
              className="px-4"
              disabled={pathname == item.linkTo}
            >
              {item.display}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </BootstrapNavbar>
  );
};
