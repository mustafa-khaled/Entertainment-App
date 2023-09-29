function Rating({ item }) {
  return (
    <div>
      {item?.vote_average > 0 && (
        <>
          <i className="fa-solid fa-star  text-sm text-yellow-500"></i>
          <span className="mx-[5px] text-sm text-colorGreyishBlue underline">
            {Number.isInteger(item?.vote_average)
              ? item?.vote_average + ".0"
              : item?.vote_average?.toFixed(1)}
          </span>
        </>
      )}
    </div>
  );
}

export default Rating;
