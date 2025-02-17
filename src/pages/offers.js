"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { category: "Transit", Everyday: 30, Preferred: 90, Spend: 500 },
  { category: "Online Retail", Everyday: 10, Preferred: 20, Spend: 300 },
  { category: "Gas Station", Everyday: 20, Preferred: 30, Spend: 400 },
  { category: "Supermarket", Everyday: 50, Preferred: 120, Spend: 600 },
  { category: "Streaming", Everyday: 10, Preferred: 20, Spend: 200 },
  { category: "Other Purchases", Everyday: 5, Preferred: 10, Spend: 150 },
];

const calculateReward = (spend, rate) => (spend * rate).toFixed(2);

export default function Offers() {
  const [activeTab, setActiveTab] = useState("table");

  // Membership Fee and Net Benefit Calculation (example)
  const everydayCardFee = 95;  // Membership Fee for Everyday Card
  const preferredCardFee = 195; // Membership Fee for Preferred Card
  const totalBenefit = data.reduce((acc, row) => acc + parseFloat(calculateReward(row.Spend, row.Preferred > row.Everyday ? 1.5 : 1)), 0);
  const netBenefitEveryday = totalBenefit - everydayCardFee;
  const netBenefitPreferred = totalBenefit - preferredCardFee;

  return (
    <div className="p-6 bg-gray-100 text-black min-h-screen">
      {/* Navigation Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${activeTab === "table" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-400"}`}
          onClick={() => setActiveTab("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "graph" ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-400"}`}
          onClick={() => setActiveTab("graph")}
        >
          Graph View
        </button>
      </div>

      {/* Table View - Panel Format */}
      {activeTab === "table" && (
        <div className="mt-6 bg-white p-6 shadow-lg rounded-md">
          {/* Header Row */}
          <div className="flex bg-white text-black">
            <div className="flex-1 py-3 px-6 font-semibold text-black border-r-4 border-dotted text-center">Category</div>
            <div className="flex-1 py-3 px-6 font-semibold text-black border-r-4 border-dotted text-center">Spend ($)</div>
            <div className="flex-1 py-3 px-6 font-semibold text-black border-r-4 border-dotted text-center">
              <Image src="/assets/everyday-card.png" alt="Everyday Card" width={100} height={50} />
            </div>
            <div className="flex-1 py-3 px-6 font-semibold text-black border-r-4 border-dotted text-center">
              <Image src="/assets/preferred-card.png" alt="Preferred Card" width={100} height={50} />
            </div>
            <div className="flex-1 py-3 px-6 font-semibold text-black text-center">Reward Forecast</div>
          </div>

          {/* Data Rows */}
          {data.map((row, index) => (
            <div key={index} className="flex text-center hover:bg-gray-50">
              <div className="flex-1 py-4 px-6 border-r-4 border-dotted text-left">{row.category}</div>
              <div className="flex-1 py-4 px-6 border-r-4 border-dotted">${row.Spend}</div>
              <div className="flex-1 py-4 px-6 border-r-4 border-dotted">${row.Everyday}</div>
              <div className="flex-1 py-4 px-6 border-r-4 border-dotted">${row.Preferred}</div>
              <div className="flex-1 py-4 px-6">{calculateReward(row.Spend, row.Preferred > row.Everyday ? 1.5 : 1)} points</div>
            </div>
          ))}

          {/* Bottom Membership Fee and Net Benefit Section */}
          <div className="mt-6 p-4 bg-gray-200 rounded-md">
            <h3 className="font-semibold text-lg">Membership Fee and Net Benefit</h3>
            <div className="mt-4">
              <p className="mb-2">Everyday Card Fee: ${everydayCardFee}</p>
              <p className="mb-2">Preferred Card Fee: ${preferredCardFee}</p>
              <p className="mb-2">Total Benefit: {totalBenefit.toFixed(2)} points</p>
              <p className="mb-2">Net Benefit for Everyday Card: {netBenefitEveryday.toFixed(2)} points</p>
              <p className="mb-2">Net Benefit for Preferred Card: {netBenefitPreferred.toFixed(2)} points</p>
            </div>
          </div>
        </div>
      )}

      {/* Graph View */}
      {activeTab === "graph" && (
        <div className="mt-6 bg-white p-4 rounded-md shadow-lg">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="category" stroke="black" />
              <YAxis stroke="black" />
              <Tooltip contentStyle={{ backgroundColor: "white", color: "black" }} />
              <Legend />
              <Bar dataKey="Everyday" fill="#8884d8" name="Blue Cash Everyday" fillOpacity={0.8} />
              <Bar dataKey="Preferred" fill="#82ca9d" name="Blue Cash Preferred" fillOpacity={0.8} />
              <Bar dataKey="Spend" fill="#ffcc00" name="Reward Forecast" fillOpacity={0.7} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
