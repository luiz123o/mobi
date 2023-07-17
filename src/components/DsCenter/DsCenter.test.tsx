import { render } from "@testing-library/react";
import { DsCenter } from ".";

test("renders children correctly", () => {
  const { getByText } = render(
    <DsCenter>
      <div>Test Content</div>
    </DsCenter>
  );

  const contentElement = getByText("Test Content");
  expect(contentElement).toBeInTheDocument();
});
