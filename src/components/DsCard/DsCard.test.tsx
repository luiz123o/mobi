import { render } from "@testing-library/react";
import { DsCard } from ".";

test("renders children correctly", () => {
  const { getByText } = render(
    <DsCard>
      <div>Test Content</div>
    </DsCard>
  );

  const contentElement = getByText("Test Content");
  expect(contentElement).toBeInTheDocument();
});