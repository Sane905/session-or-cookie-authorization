import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import React from "react";

import * as stories from "./LoginForm.stories";


const { Default } = composeStories(stories);

describe("LoginForm", () => {
  it("error, warning が出力されない", () => {
    const warnSpy = jest.spyOn(global.console, "warn");
    const errorSpy = jest.spyOn(global.console, "error");

    render(
        <Default />
    );

    expect(warnSpy).not.toBeCalled();
    expect(errorSpy).not.toBeCalled();
  });
});
