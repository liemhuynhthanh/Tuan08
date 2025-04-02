import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import DetailedReport from './components/DetailedReport';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          {/* Metrics Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <MetricCard title="Turnover" value="$92,405" change="-5.39% period of change" />
            <MetricCard title="Profit" value="$32,218" change="-5.39% period of change" />
            <MetricCard title="New Customers" value="298" change="+6.84% period of change" />
          </div>

          {/* Detailed Report */}
          <DetailedReport />
        </div>
      </div>
    </div>
  );
}

export default App;
