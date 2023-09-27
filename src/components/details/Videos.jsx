import Swiper from "../Swiper";
import SectionHeader from "../sectionHeader/SectionHeader";

function Videos({ Videos }) {
  return (
    <div>
      <SectionHeader title="Videos" />
      <Swiper data={Videos?.results} type="videos" />
    </div>
  );
}

export default Videos;
