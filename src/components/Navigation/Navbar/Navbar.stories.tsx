import React from "react";
import { Navbar } from "./Navbar";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavBar = Template.bind({});

NavBar.args = {
  navItems: [
    {
      display: "Home",
      linkTo: "/",
    },
    {
      display: "Education",
      linkTo: "/education",
    },
    {
      display: "Experience",
      linkTo: "/experience",
    },
    {
      display: "Contact Me",
      linkTo: "/contact",
    },
  ],
};
