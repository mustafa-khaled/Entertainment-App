function Error({ massage }) {
  return (
    <div className="flex h-[90vh] items-center justify-center  text-colorWhite">
      <h1 className="text-2xl">{massage}</h1>
    </div>
  );
}

export default Error;
