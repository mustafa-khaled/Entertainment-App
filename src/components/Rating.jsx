function Rating({ item }) {
  return (
    <div>
      <i className="fa-solid fa-star mr-[5px] text-sm text-yellow-500"></i>
      <span className="text-sm text-colorGreyishBlue underline">
        {Number.isInteger(item?.vote_average)
          ? item?.vote_average + ".0"
          : item?.vote_average.toFixed(1)}
      </span>
    </div>
  );
}

export default Rating;
