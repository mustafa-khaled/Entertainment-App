import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <img src="/logo.svg" alt="App Logo" className="md:mb-[70px]" />
      </Link>
    </div>
  );
}

export default Logo;
