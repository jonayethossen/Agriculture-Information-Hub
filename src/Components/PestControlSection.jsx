import React, { useState } from "react";
// Replace with your actual pest control related image path
import PestImage from "../assets/CABI_SocialMediaIPM_08.04.2024-01-1024x576.jpg";

export default function PestControlSection() {
  // 1. Data Structure based on Section 4 of the Job Scope
  const [strategies] = useState([
    {
      id: 1,
      category: "Preventive",
      title: "Crop Rotation & Soil Health",
      target: "General Pests",
      remedy: "Organic",
      desc: "Detailed guide on using early detection and crop rotation to prevent common infestations before they begin.",
    },
    {
      id: 2,
      category: "Biological",
      title: "Natural Predator Integration",
      target: "Aphids & Mitie",
      remedy: "Eco-Friendly",
      desc: "Learn how to use biological controls like ladybugs and predatory mites as an integrated pest management (IPM) strategy.",
    },
    {
      id: 3,
      category: "Organic Remedies",
      title: "Neem Oil & Herbal Sprays",
      target: "Insects/Fungi",
      remedy: "Natural",
      desc: "How to prepare and apply organic remedies for effective treatment of pest infestations without harsh chemicals.",
    },
  ]);

  const [filter, setFilter] = useState("All");

  // 2. Filter Logic for Pest Categories
  const filteredStrategies =
    filter === "All"
      ? strategies
      : strategies.filter((s) => s.category === filter);

  return (
    <div className="bg-[#121212] text-white min-h-screen pb-20">
      {/* 3. Introduction Section (As per Requirement 4.a/c) */}
      <div className="hero bg-[#1a1a1a] py-16 px-6 border-b border-gray-800">
        <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto flex gap-12">
          <img
            src={PestImage}
            className="max-w-sm rounded-2xl shadow-2xl border border-red-900/30 shadow-red-900/10"
            alt="Pest Management"
          />
          <div className="lg:pl-10">
            <h1 className="text-5xl font-extrabold text-[#e53935] mb-6 tracking-tight">
              Pest Control Strategies
            </h1>
            <p className="py-2 text-gray-400 leading-relaxed text-justify">
              Effective pest management is vital for protecting your
              agricultural investments. Our Integrated Pest Management (IPM)
              strategies focus on early detection, monitoring, and eco-friendly
              solutions. By combining biological controls with preventive
              cultural practices, farmers can minimize crop loss while reducing
              dependence on synthetic pesticides. This section provides a
              step-by-step guide to identifying common threats and applying
              organic remedies to ensure a healthy, sustainable harvest.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#e53935]">
            STRATEGY REPOSITORY
          </h2>
          <div className="h-1 w-20 bg-[#e53935] mx-auto mt-2"></div>
        </div>

        {/* 4. Categorization Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Preventive", "Biological", "Organic Remedies"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn btn-sm rounded-full px-6 transition-all ${
                  filter === cat
                    ? "bg-[#e53935] border-none text-white"
                    : "btn-outline text-gray-400 border-gray-700 hover:bg-[#e53935] hover:text-white"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* 5. Detailed View Grid (Requirement 4.b) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStrategies.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-[#e53935] transition-all group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-[#e53935] uppercase tracking-widest">
                  {item.category} • {item.remedy}
                </span>
                <span className="text-[10px] bg-red-900/20 text-red-400 px-2 py-1 rounded border border-red-900/30">
                  Target: {item.target}
                </span>
              </div>

              <h3 className="text-xl font-bold mt-4 text-white group-hover:text-[#e53935] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-400">
                <span className="italic">Early Detection Tips Included</span>
                <span className="bg-gray-800 px-2 py-1 rounded">
                  IPM Verified
                </span>
              </div>

              {/* Action Button as requested */}
              <button className="btn btn-sm btn-block bg-[#e53935] hover:bg-[#c62828] text-white border-none mt-5">
                Identify & Treat
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
