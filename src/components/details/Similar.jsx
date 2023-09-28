import Swiper from "../Swiper";
import SectionHeader from "../sectionHeader/SectionHeader";

function Similar({ title, data, endPoint }) {
  return (
    <div>
      <SectionHeader title={`${title}`} />
      <Swiper data={data?.results} endPoint={endPoint} />
    </div>
  );
}

export default Similar;
