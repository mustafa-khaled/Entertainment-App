import Swiper from "../Swiper";
import SectionHeader from "../sectionHeader/SectionHeader";
import Item from "../Item";

function Similar({ title, data, endPoint }) {
  return (
    <div>
      <SectionHeader title={`${title}`} />
      <Swiper data={data?.results}>
        <Item Item={data?.results} endPoint={endPoint} />
      </Swiper>
    </div>
  );
}

export default Similar;
