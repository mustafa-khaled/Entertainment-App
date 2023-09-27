import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, styles, alt }) => {
  return <LazyLoadImage className={styles} alt={alt} effect="blur" src={src} />;
};

export default Img;
