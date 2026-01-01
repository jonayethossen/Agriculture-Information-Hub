import React, { useState } from "react";
import DocImage from "../assets/smart-agriculture-iot-with-hand-planting-tree-background.jpg";

export default function FarmingSection() {
  // Sample data (Catalog)
  const [documents] = useState([
    {
      id: 1,
      title: "Instrument of Surrender",
      type: "Treaty",
      date: "16 Dec 1971",
      source: "National Museum",
      desc: "Official surrender of Pakistan Army.",
    },
    {
      id: 2,
      title: "Independence Declaration",
      type: "Declaration",
      date: "26 Mar 1971",
      source: "Govt Archive",
      desc: "Radio broadcast by Bangabandhu.",
    },
    {
      id: 3,
      title: "Mujibnagar Govt Letter",
      type: "Correspondence",
      date: "April 1971",
      source: "Official Records",
      desc: "Formal government correspondence.",
    },
  ]);

  const [filter, setFilter] = useState("All");

  // Filtering (Categorization)
  const filteredDocs =
    filter === "All" ? documents : documents.filter((d) => d.type === filter);

  return (
    <div className="bg-[#121212] text-white min-h-screen pb-20">
      {/* Introduction & Significance */}
      <div className="hero bg-[#1a1a1a] py-16 px-6 border-b border-gray-800">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl">
          <img
            src={DocImage}
            className="max-w-sm rounded-2xl shadow-2xl border border-gray-700"
            alt="1971 War"
          />
          <div className="lg:pr-10">
            <h1 className="text-5xl font-extrabold text-[#00a86b] mb-6 tracking-tight">
              Traditional Soil Farming
            </h1>
            <p className="py-2 text-gray-400 leading-relaxed text-justify">
              A Collection of Guides: This should be a library covering various
              farming practices, techniques, and methodologies. Smart
              Categorization: You must organize these guides based on crop
              types, specific seasons, and farming methods. Actionable Content:
              Each guide needs detailed step-by-step instructions, practical
              tips, and best practices for effective farming.
            </p>
          </div>
        </div>
      </div>

      {/* Documents Catalog */}
      <div className="container mx-auto px-6 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#00a86b]">
            FARMING GUIDES CATALOG
          </h2>
          <div className="h-1 w-20 bg-[#f42a41] mx-auto mt-2"></div>
        </div>

        {/* Categorization Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Treaty", "Declaration", "Correspondence"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-sm rounded-full px-6 ${
                filter === cat
                  ? "bg-[#00a86b] border-none text-white"
                  : "btn-outline text-gray-400 border-gray-700 hover:bg-[#00a86b] hover:border-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed View Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-[#00a86b] transition-all group"
            >
              <span className="text-[10px] font-bold text-[#f42a41] uppercase tracking-widest">
                {doc.type}
              </span>
              <h3 className="text-xl font-bold mt-2 text-white group-hover:text-[#00a86b] transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {doc.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-400">
                <span>{doc.date}</span>
                <span className="italic">Source: {doc.source}</span>
              </div>

              <button className="btn btn-xs btn-outline mt-5 w-full border-gray-700 text-gray-400 hover:bg-[#00a86b] hover:text-white">
                Detailed View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
