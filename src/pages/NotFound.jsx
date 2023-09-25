import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-colorDarkBlue text-center text-colorGreyishBlue">
      <div>
        <i className="fa-solid fa-triangle-exclamation text-7xl"></i>
        <h1 className="my-[10px] text-3xl">Page Not Found.</h1>
        <Link
          to={"/"}
          replace
          className="text-colorRed underline hover:opacity-[0.7]"
        >
          Go Home !
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
