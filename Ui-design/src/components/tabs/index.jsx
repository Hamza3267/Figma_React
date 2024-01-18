// Tab.js
import React from 'react';
import style from './tab.module.scss';

const Tab = ({ tabsData, activeTab, setActiveTab }) => {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={style.main}>
      <div className={style.tab}>
        <div className={style.line}></div>
        <div style={{ display: 'flex', gap: '30px' }}>
          {tabsData.map((tab, index) => (
            <div
              className={`${style.titlee} ${activeTab === index ? style.activeTab : ''}`}
              key={index}
            >
              <h3 onClick={() => handleTabClick(index)} className={style.h3}>
                {tab.title}
              </h3>
            </div>
          ))}
        </div>
        <div className={style.graph}>
          <p className={style.para}>{tabsData[activeTab]?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
