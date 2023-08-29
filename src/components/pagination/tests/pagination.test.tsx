import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";
import Pagination from "../ui/pagination";

describe("Pagination component", () => {
  it("renders with initial input value as '1'", () => {
    const { getByDisplayValue } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputElement = getByDisplayValue("1");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates input value when the input field is changed", () => {
    const { getByRole } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const inputElement = getByRole("textbox") as HTMLInputElement; // Type assertion
    fireEvent.change(inputElement, { target: { value: "5" } });
    expect(inputElement.value).toEqual("5"); // Now TypeScript recognizes the value property
  });
});
