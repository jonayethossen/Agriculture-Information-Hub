import React, { useState } from "react";
import DocImage from "../assets/smart-agriculture-iot-with-hand-planting-tree-background.jpg";

export default function FarmingCropSection() {
  // 1. Updated Data Structure to match Agricultural Scope
  const [documents] = useState([
    {
      id: 1,
      type: "Grains",
      title: "Rice & Wheat Cultivation",
      season: "Rabi",
      method: "Traditional",
      desc: "Comprehensive guide on soil preparation, irrigation, and organic fertilization for high-yield grains.",
    },
    {
      id: 2,
      type: "Cash Crops",
      title: "Jute & Tea Production",
      season: "Kharif-1",
      method: "Industrial",
      desc: "Step-by-step instructions from seed selection to harvesting techniques for major export crops.",
    },
    {
      id: 3,
      type: "Vegetables",
      title: "Winter Vegetable Farming",
      season: "Rabi",
      method: "Organic",
      desc: "Expert best practices to help farmers avoid common pests and maximize organic vegetable yield.",
    },
  ]);

  const [filter, setFilter] = useState("All");

  // 2. Categorization Logic
  const filteredDocs =
    filter === "All" ? documents : documents.filter((d) => d.type === filter);

  return (
    <div className="bg-[#121212] text-white min-h-screen pb-20">
      {/* 3. Introduction Section */}
      <div className="hero bg-[#1a1a1a] py-16 px-6 border-b border-gray-800">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto flex">
          <img
            src={DocImage}
            className="max-w-sm rounded-2xl shadow-2xl border border-gray-700"
            alt="Smart Agriculture"
          />
          <div className="lg:pr-10">
            <h1 className="text-5xl font-extrabold text-[#00a86b] mb-6 tracking-tight">
              Farming Guides & Tutorials
            </h1>
            <p className="py-2 text-gray-400 leading-relaxed text-justify">
              Farming training focuses heavily on doing tree runs, which is a
              recurring training method. Much like daily events and recurring
              money making methods, tree runs give Farming experience passively
              over time since it is possible to only do 1 or 2 runs per day.
              Instead of actively training the skill for hours, players only
              spend a few minutes to do a run, gaining a lot of Farming
              experience during that short amount of time, and then do other
              activities while waiting for the patches to grow. While trees take
              a very long while to grow in real time, players spend very little
              time actively doing tree runs. Doing tree runs costs money, and
              certain saplings and protection payments can be quite expensive.
              It is recommended to have a decent amount of money to be able to
              buy a lot of Farming supplies at once, and have a good money
              making method to sustain the cost of doing tree runs. Herb runs
              are often highly profitable and they also offer a fair amount of
              Farming experience, but usually it is better to look into money
              making alternatives that offer better profit.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#00a86b]">
            CROP GUIDES CATALOG
          </h2>
          <div className="h-1 w-20 bg-[#00a86b] mx-auto mt-2"></div>
        </div>

        {/* 4. Categorization Filters (Updated for Agriculture) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Grains", "Cash Crops", "Vegetables"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-sm rounded-full px-6 transition-all ${
                filter === cat
                  ? "bg-[#00a86b] border-none text-white"
                  : "btn-outline text-gray-400 border-gray-700 hover:bg-[#00a86b] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5. Detailed View Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-[#00a86b] transition-all group"
            >
              <span className="text-[10px] font-bold text-[#00a86b] uppercase tracking-widest">
                {doc.type} • {doc.method}
              </span>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-[#00a86b] transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {doc.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-400">
                <span className="bg-gray-800 px-2 py-1 rounded">
                  Season: {doc.season}
                </span>
                <span className="italic">Step-by-step guide included</span>
              </div>

              {/* Action Buttons suggested for this section */}
              <button className="btn btn-sm btn-block bg-[#00a86b] hover:bg-[#008a58] text-white border-none mt-5">
                Read Full Guide
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
