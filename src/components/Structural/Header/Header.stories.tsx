import React from "react";
import { Header } from "./Header";

import { Meta } from "@storybook/react";
import { Renderer, StoryFn } from "@storybook/types";

export default {
  title: "Structure/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<Renderer> = () => (
  <Header>
    <span></span>
  </Header>
);

export const DefaultHeader = Template.bind({});
