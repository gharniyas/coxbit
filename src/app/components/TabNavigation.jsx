'use client';

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap border-b border-gray-200 bg-white">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`flex items-center gap-2 px-5 py-3.5 font-semibold text-sm transition-colors duration-200 border-b-2 -mb-px whitespace-nowrap ${
            activeTab === index
              ? 'text-[#6b4226] border-[#c89b3c]'
              : 'text-gray-500 border-transparent hover:text-[#6b4226] hover:border-gray-300'
          }`}
        >
          {tab.icon && <span className="text-lg">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
