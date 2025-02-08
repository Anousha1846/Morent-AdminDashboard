import DashboardCards from "@/components/DashboardCards";
import OrdersChart from "@/components/OrdersCharts";
import RecentOrders from "@/components/RecentOrders";

export default function DashboardPage() {
  return (
    <div className="w-screen">
      <div >
          <DashboardCards />
          <OrdersChart />
          <RecentOrders />
      </div>
    </div>
  );
}
