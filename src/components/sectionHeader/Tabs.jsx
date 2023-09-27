import { useState } from "react";

function Tabs({ tabs, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="w-[50%] sm:w-auto">
      <div className="h-9  rounded-full bg-colorSemiDarkBlue p-1 text-colorWhite">
        {tabs && (
          <div className="relative flex h-full items-center">
            {tabs.map((tab, index) => (
              <span
                key={tab}
                className={`${
                  selectedTab === index ? "bg-colorRed" : ""
                } relative flex h-full w-32  cursor-pointer items-center justify-center rounded-full text-sm transition duration-300 ease-in-out sm:text-base`}
                onClick={() => activeTab(tab, index)}
              >
                {tab}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
