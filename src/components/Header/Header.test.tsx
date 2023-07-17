import React from "react";
import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
  const title = "Test Title";
  const description = "Test Description";

  test("renders title and description correctly", () => {
    const { getByText } = render(
      <Header title={title} description={description} />
    );

    const titleElement = getByText(title);
    const descriptionElement = getByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders title with h4 variant", () => {
    const { getByText } = render(
      <Header title={title} description={description} />
    );

    const titleElement = getByText(title);
    expect(titleElement.tagName.toLowerCase()).toBe("h4");
  });

  test("renders description with body1 variant", () => {
    const { getByText } = render(
      <Header title={title} description={description} />
    );

    const descriptionElement = getByText(description);
    expect(descriptionElement.tagName.toLowerCase()).toBe("p");
  });

  test("title and description have correct styles", () => {
    const { getByText } = render(
      <Header title={title} description={description} />
    );

    const titleElement = getByText(title);
    const descriptionElement = getByText(description);

    expect(titleElement).toHaveStyle("font-weight: 700; color: #424242;");
    expect(descriptionElement).toHaveStyle("font-weight: 700; color: #424242;");
  });
});
