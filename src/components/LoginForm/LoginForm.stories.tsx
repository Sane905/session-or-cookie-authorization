import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";

export default {
  title: "TwitterClone / Components / LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Default: ComponentStoryObj<typeof LoginForm> = {
  args: {},
};
