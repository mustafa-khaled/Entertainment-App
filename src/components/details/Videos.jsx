import Swiper from "../Swiper";
import SectionHeader from "../sectionHeader/SectionHeader";

function Videos({ videos }) {
  return (
    <div>
      <SectionHeader title="Videos" />
      <Swiper data={videos?.results} type="videos" />
    </div>
  );
}

export default Videos;
