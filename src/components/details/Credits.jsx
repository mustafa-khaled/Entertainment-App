import SectionHeader from "../sectionHeader/SectionHeader";
import Swiper from "../Swiper";

function Credits({ credits }) {
  return (
    <div>
      <SectionHeader title="Cast" />
      <Swiper data={credits?.cast} type="cast" />
    </div>
  );
}

export default Credits;
