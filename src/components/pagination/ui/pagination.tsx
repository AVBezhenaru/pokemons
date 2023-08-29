import { useState } from "react";
import { IPaginationProps } from "../types/IPaginationProps";
import { Wrapper } from "./styled";

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [input, setInput] = useState("1");
  const lastPage = Math.ceil(totalPages / 20);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= lastPage) {
      onPageChange(pageNumber);
      setInput(pageNumber.toString());
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pageNumber = parseInt(input);
    if (pageNumber >= 1 && pageNumber <= lastPage) {
      handlePageChange(pageNumber);
    }
  };

  return (
    <Wrapper>
      <ul>
        <li>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        </li>
        <li>
          <button onClick={() => handlePageChange(1)}>1</button>
        </li>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
        </form>
        <li>
          <button onClick={() => handlePageChange(lastPage)}>{lastPage}</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Pagination;
