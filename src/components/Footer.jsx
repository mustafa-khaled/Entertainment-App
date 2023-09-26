import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-colorSemiDarkBlue p-[10px] text-center text-sm text-colorGreyishBlue">
      This App Created By @
      <Link
        to={"https://github.com/mustafa-khaled"}
        target="_blank"
        className="text-colorRed underline"
      >
        Mustafa Khaled
      </Link>
    </footer>
  );
}

export default Footer;
