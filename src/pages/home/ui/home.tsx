import { useEffect, useState } from "react";
import useSWR from "swr";
import { BASE_URL } from "../../../api/api";
import { List } from "../../../components/list";
import { Pagination } from "../../../components/pagination";
import { fetcher } from "../../../utils/fetcher";
import { IResData } from "../../types/IResData";
import { Err, Spinner, Title, Wrapper } from "./styled";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const calcPagination = currentPage * 20 - 20;

  const { data, error } = useSWR<IResData>(
    `${BASE_URL}${calcPagination}`,
    fetcher
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (data) {
      setTotalPages(data.count);
    }
  }, [data]);

  if (error) {
    return (
      <Err>
        <p>Oops, something went wrong!</p>
      </Err>
    );
  }

  return (
    <Wrapper>
      <Title>Pokemons</Title>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {!data ? <Spinner /> : <List data={data} />}
    </Wrapper>
  );
};
