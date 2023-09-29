import Swiper from "../Swiper";
import SectionHeader from "../sectionHeader/SectionHeader";
import Video from "./Video";

function Videos({ videos }) {
  return (
    <div>
      <SectionHeader title="Videos" />
      <Swiper data={videos?.results?.slice(0, 5)} type="videos">
        <Video item={videos?.results?.slice(0, 5)} />
      </Swiper>
    </div>
  );
}

export default Videos;
