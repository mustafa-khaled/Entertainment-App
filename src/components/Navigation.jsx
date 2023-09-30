function Navigation({ goToPrevPage, goToNextPage, pageNum, data }) {
  return (
    <div className="flex items-center gap-[10px]">
      <button onClick={goToPrevPage} disabled={pageNum === 1}>
        <i
          className={`fa-regular fa-circle-left  text-2xl ${
            pageNum === 1 ? "cursor-default" : "hover:text-colorRed"
          }`}
        ></i>
      </button>

      <button onClick={goToNextPage} disabled={data && data?.length === 0}>
        <i
          className={`fa-regular fa-circle-right text-2xl ${
            data && data?.length === 0
              ? "cursor-default"
              : "hover:text-colorRed"
          }`}
        ></i>
      </button>
    </div>
  );
}

export default Navigation;
