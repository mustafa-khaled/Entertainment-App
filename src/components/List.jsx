import { useDispatch, useSelector } from "react-redux";
import { fetchDiscoverData } from "../store/features/discoverSlice";
import { useEffect, useState } from "react";

import Error from "./Error";
import Item from "./Item";
import Loader from "./Loader";
import SectionHeader from "./sectionHeader/SectionHeader";
import Navigation from "./Navigation";

function List({ endPoint }) {
  const dispatch = useDispatch();
  const title = endPoint === "movie" ? "Movies" : "TV Shows";
  const { data, loading, error } = useSelector((state) => state.discover);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchDiscoverData({ type: endPoint, page: currentPage }));
  }, [dispatch, currentPage, endPoint]);

  if (loading) return <Loader />;
  if (error) return <Error massage={`Failed To Fetch ${title} Data.`} />;

  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionHeader title={title} />
        <Navigation
          goToPrevPage={handlePrevPage}
          goToNextPage={handleNextPage}
          pageNum={currentPage}
          data={data}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px]">
        {data?.results?.length > 0 &&
          data?.results?.map((item) => (
            <Item key={item?.id} item={item} endPoint={endPoint} />
          ))}
      </div>
    </div>
  );
}

export default List;
