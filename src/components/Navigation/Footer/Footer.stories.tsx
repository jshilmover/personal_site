import React from "react";
import { Footer } from "./Footer";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Navigation/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const ExampleFooter = Template.bind({});
