import React, { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export function SearchLawyer() {

  return (
    <>
      <SearchBarFeatures></SearchBarFeatures>
    </>
  );
}


const SearchBarFeatures = () => {
  const [showPostSection, setShowPostSection] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lawyers, setLawyers] = useState([
    { id: 1, name: "John Doe", specialization: "Criminal Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
    { id: 2, name: "Jane Smith", specialization: "Family Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
    { id: 3, name: "Alice Brown", specialization: "Corporate Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
    { id: 4, name: "Robert Johnson", specialization: "Immigration Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },

  ]);

  const togglePostIncidentSummary = () => {
    setShowPostSection(!showPostSection);
  };

  // Filter lawyers based on the search query
  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Top Section */}
        <div className="flex justify-between mb-6">
          {/* Search Bar */}
          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            Search Lawyer
          </h1>
          <div className="w-1/3 flex items-center relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search lawyers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-2 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-r-lg text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Search
            </button>
          </div>

          {/* Post Incident Summary Button */}

          <div className="flex items-center">

            <button
              onClick={togglePostIncidentSummary}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Post Incident Summary
            </button>
          </div>
        </div>




        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Search Results Section (65%) */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            {/* Filtering Section */}
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Search Results</h2>
              <select
                className="border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Specializations</option>
                <option value="criminal">Criminal Law</option>
                <option value="family">Family Law</option>
                <option value="corporate">Corporate Law</option>
              </select>
            </div>

            {/* Lawyer List */}
            {lawyers.length === 0 ? (
              <p className="text-gray-500">
                No lawyers found. Please search to see results.
              </p>
            ) : (
              <ul className="space-y-4">
                {lawyers.map((lawyer) => (
                  <li
                    key={lawyer.id}
                    className="p-4 border border-gray-300 rounded-lg flex items-center space-x-4"
                  >
                    <img
                      src={lawyer.profileImage}
                      alt={`${lawyer.name}'s profile`}
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div className="flex-grow">
                      <p className="font-medium text-gray-800">{lawyer.name}</p>
                      <p className="text-sm text-gray-500">
                        {lawyer.specialization}
                      </p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
                      View Profile
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Post Incident Summary Section (Below Results) */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-5 text-left">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Posted Incident Summary
              </h2>
              <ol className="list-decimal list-inside">
                <li>I want to case againest a fraud <a href="#" className="text-blue-600 underline">See Update</a> </li>
              </ol>
            </div>

            {showPostSection && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Post Incident Summary
                </h2>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your incident summary here..."
                ></textarea>
                <button
                  className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Post
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};