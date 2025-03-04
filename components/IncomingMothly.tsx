import { useEffect, useState } from "react";

export default function IncomeDashboard() {
  const [data, setData] = useState<{
    dailySales: number;
    avgOrderValue: number;
    commissionRate: number;
    totalIncome: number;
  } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        dailySales: 3,
        avgOrderValue: 370000,
        commissionRate: 0.3,
        totalIncome: 10000000,
      });
    }, 1000);
  }, []);
  if (!data) {
    return <div className="text-center text-slate-600">Đang tải dữ liệu...</div>;
  }
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-center">
          THU NHẬP HÀNG THÁNG CỦA BẠN VỚI SELLY
        </h2>
        <p className="text-slate-600 text-center">
          Tỷ lệ hoa hồng trung bình bán hàng trên Selly là{" "}
          <span className="font-semibold">{data.commissionRate * 100}%</span> cho mỗi đơn hàng
        </p>
      </div>

      <div className="grid gap-4 p-6 bg-white rounded-lg shadow-sm border">
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>Bán mỗi ngày:</div>
          <div className="text-right font-medium">{data.dailySales} đơn hàng</div>

          <div>Giá trị trung bình:</div>
          <div className="text-right font-medium">{data.avgOrderValue.toLocaleString()}đ</div>

          <div>Tỷ lệ hoa hồng:</div>
          <div className="text-right font-medium">{data.commissionRate * 100}%</div>
        </div>

        <div className="mt-4 pt-4 border-t grid grid-cols-2 items-center">
          <div className="text-lg text-slate-700">Tổng thu nhập:</div>
          <div className="text-right text-2xl font-bold text-[#c36]">
            {data.totalIncome.toLocaleString()}đ
          </div>
        </div>
      </div>
    </div>
  );
}
