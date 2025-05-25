
import React from "react";
import { MapPin, Leaf, Search } from "lucide-react";

export default function AgriMatchHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-green-800 drop-shadow">AgriMatch</h1>
        <p className="text-xl text-green-600 mt-2">Connecting Farmers to Markets</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
          <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <Leaf size={24} /> Market Prices
          </h2>
          <p className="text-gray-600 mt-2">Get real-time updates on produce prices in local markets to make informed selling decisions.</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl w-full hover:bg-green-700 transition">View Prices</button>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
          <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <Search size={24} /> Match with Buyers
          </h2>
          <p className="text-gray-600 mt-2">Find nearby buyers who are actively looking for the crops you have harvested.</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl w-full hover:bg-green-700 transition">Find Buyers</button>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
          <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <MapPin size={24} /> Locate Markets
          </h2>
          <p className="text-gray-600 mt-2">Use location services to discover the closest markets to your farm.</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl w-full hover:bg-green-700 transition">View Map</button>
        </div>
      </section>

      <section className="mt-16 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-4">Subscribe for Price Alerts</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter crop name (e.g., Maize)"
            className="flex-1 px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-green-600">
        &copy; 2025 AgriMatch. All rights reserved.
      </footer>
    </div>
  );
}
