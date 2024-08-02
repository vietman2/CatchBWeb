import React from 'react';
import './Tabs.css';

interface TabsProps {
  tabNames: string[];
  onTabClick: (tab: string) => void;
  selectedTab: string;
}

const Tabs: React.FC<TabsProps> = ({ tabNames, onTabClick, selectedTab }) => {
  return (
    <div className="tabs-container">
      {tabNames.map((tabName) => (
        <div
          key={tabName}
          className={`tab-item ${selectedTab === tabName ? 'active' : ''}`}
          onClick={() => onTabClick(tabName)}
        >
          {tabName}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
