'use client';

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex border-b-4 border-gray-300 mb-0 bg-gray-100">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`flex items-center gap-2 px-6 py-4 font-semibold text-base transition-all relative ${
            activeTab === index
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={{
            borderBottom: activeTab === index ? '4px solid #2563eb' : 'none',
            marginBottom: activeTab === index ? '-4px' : '0',
            zIndex: activeTab === index ? 10 : 1
          }}
        >
          {tab.icon && <span className="text-xl">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
