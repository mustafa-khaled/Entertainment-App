import SectionHeader from "../sectionHeader/SectionHeader";
import Swiper from "../Swiper";
import Cast from "./Cast";

function Credits({ credits }) {
  return (
    <div>
      <SectionHeader title="Cast" />
      <Swiper data={credits?.cast}>
        <Cast item={credits?.cast} />
      </Swiper>
    </div>
  );
}

export default Credits;
