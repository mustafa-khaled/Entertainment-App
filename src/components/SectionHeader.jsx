import { useState } from "react";

function SectionHeader({ title, tabs, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="mt-8 flex items-center justify-between">
      <h2 className="text-2xl">{title}</h2>
      <div>
        <div className="switchingTabs h-9 rounded-full bg-colorSemiDarkBlue p-1 text-colorWhite">
          <div className="relative flex h-full items-center">
            {tabs.map((tab, index) => (
              <span
                key={tab}
                className={`${
                  selectedTab === index ? "bg-colorRed" : ""
                } tabItem relative flex h-full w-32  cursor-pointer items-center justify-center rounded-full text-base transition duration-300 ease-in-out`}
                onClick={() => activeTab(tab, index)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
