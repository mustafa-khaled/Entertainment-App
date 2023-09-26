function Loader({ smallLoader = false }) {
  return (
    <div
      className={`flex ${
        smallLoader ? " h-[200px]" : " h-[90vh]"
      } items-center justify-center`}
    >
      <div
        className={`${
          smallLoader ? "h-[3rem] w-[3rem]" : "h-[5rem] w-[5rem]"
        } animate-ping rounded-full bg-colorRed`}
      ></div>
    </div>
  );
}

export default Loader;
