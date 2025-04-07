import { useEffect, useState } from "react";
import MetricCard from '../components/MetricCard';  // Nhớ import MetricCard

function Overview() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    // Fetch data sử dụng fetch API
    fetch("https://67f2d1deec56ec1a36d44e39.mockapi.io/overview")
      .then((response) => response.json())  // Chuyển đổi dữ liệu nhận được thành JSON
      .then((data) => setMetrics(data))     // Cập nhật dữ liệu vào state
      .catch((err) => console.error('Error fetching data:', err)); // Xử lý lỗi nếu có
  }, []);

  return (
   <>
    <h2 className="font-bold ml-3 text-pink-400">Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
   
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          title={metric.title}
          value={metric.total}
          change={metric.percent}
          icon={metric.icon}
          color={metric.color}
        />
      ))}
    </div>
   </>
    

  );
}

export default Overview;
