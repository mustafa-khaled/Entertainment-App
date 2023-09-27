import Head from "./Head";
import Tabs from "./Tabs";

function SectionHeader({ title, tabs, onTabChange }) {
  return (
    <div className="my-8 flex items-center justify-between ">
      <Head title={title} />

      {tabs && <Tabs tabs={tabs} onTabChange={onTabChange} />}
    </div>
  );
}

export default SectionHeader;
