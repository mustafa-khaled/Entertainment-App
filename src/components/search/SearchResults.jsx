import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import Item from "../Item";
import Loader from "../Loader";
import SectionHeader from "../sectionHeader/SectionHeader";
import ResultsNavigation from "./ResultsNavigation";

function SearchResults() {
  const [values, setValues] = useState({
    data: null,
    pageNum: 1,
    loading: false,
  });
  const { data, pageNum, loading } = values;
  const query = useParams();

  const fetchInitialData = () => {
    setValues({ ...values, loading: true });
    fetchDataFromApi(`/search/multi?query=${query.query}&page=${pageNum}`).then(
      (res) => {
        setValues({
          ...values,
          data: res.results,
        });
      },
    );
  };

  const goToNextPage = () => {
    setValues({
      ...values,
      pageNum: pageNum + 1,
    });
  };

  const goToPrevPage = () => {
    if (pageNum > 1) {
      setValues({
        ...values,
        pageNum: pageNum - 1,
      });
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [query, pageNum]);

  if (loading) return <Loader />;

  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionHeader
          title={`Found ${pageNum > 1 ? "More" : ""} ${
            data?.length > 0
              ? data?.filter((item) => item?.media_type !== "person").length
              : "0"
          } Results For '${query.query}'.`}
        />

        <ResultsNavigation
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          pageNum={pageNum}
          data={data}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px]">
        {data?.length > 0 &&
          data
            ?.filter((item) => item?.media_type !== "person")
            .map((item) => <Item key={item?.id} item={item} />)}
      </div>
    </div>
  );
}

export default SearchResults;
