import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from "react-redux";
import { fetchLawyersAsync, selectLawyers } from "./SearchLawyerSlice";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';


import WorkIcon from "@mui/icons-material/Work";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


export function SearchLawyer() {
  const dispatch = useDispatch();
  const lawyers = useSelector(selectLawyers);
  const [showPostSection, setShowPostSection] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState(null); // State for modal popup

  // const [lawyers, setLawyers] = useState([
  //   { id: 1, name: "John Doe", specialization: "Criminal Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
  //   { id: 2, name: "Jane Smith", specialization: "Family Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
  //   { id: 3, name: "Alice Brown", specialization: "Corporate Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },
  //   { id: 4, name: "Robert Johnson", specialization: "Immigration Law", profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" },

  // ]);

  const togglePostIncidentSummary = () => {
    setShowPostSection(!showPostSection);
  };

  // Filter lawyers based on the search query
  const filteredLawyers = lawyers.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchLawyersAsync())
  }, [dispatch])

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
              className="w-full pl-10 pr-2 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-r-lg hover:bg-blue-600">
              Search
            </button>
          </div>
          {/* Post Incident Summary Button */}
          <button
            onClick={togglePostIncidentSummary}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Post Incident Summary
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* Search Results */}
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

            {filteredLawyers.length === 0 ? (
              <p className="text-gray-500">No lawyers found.</p>
            ) : (
              <ul className="space-y-4">
                {filteredLawyers.map((lawyer) => (
                  <li
                    key={lawyer.id}
                    className="p-4 border border-gray-300 rounded-lg flex items-center space-x-4 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={
                        lawyer.photo ?
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          : null
                      }
                      alt={`${lawyer.name}'s profile`}
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div className="flex-grow">
                      <p className="font-medium text-gray-800">{lawyer.name}</p>
                      <p className="text-sm text-gray-500">{lawyer.PeferDomain}</p>
                    </div>
                    <div className="flex-grow">

                      <p className="text-sm text-gray-500"> <LocationOnIcon /> {lawyer.practiceCity}</p>
                    </div>
                    <button
                      onClick={() => setSelectedLawyer(lawyer)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      View Profile
                    </button>
                  </li>
                ))}
              </ul>

            )}
            {/* View Profile Modal Popup */}
            {selectedLawyer && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white w-2/3 max-h-[95vh] overflow-auto rounded-lg shadow-lg p-6 relative animate-fadeIn">
                  {/* Close Icon */}
                  <button
                    onClick={() => setSelectedLawyer(null)}
                    className="absolute top-10 right-3 text-gray-600 hover:text-gray-800"
                  >
                    <CloseIcon fontSize="large" />
                  </button>
                  {/* ViewProfile component Use */}
                  <ViewProfile
                    lawyer={selectedLawyer}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Post Incident Summary Section */}
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
                <h2 className="text-lg font-semibold mb-4">Post Incident Summary</h2>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  placeholder="Write your incident summary here..."
                ></textarea>
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>


    </>
  );
}

// View Lawyer modal component 
function ViewProfile({ lawyer }) {
  return (
    <div className=" bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.01]">
        {/* Header Section */}
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1008159054/photo/law-and-justice.jpg?s=612x612&w=0&k=20&c=cJEnc4NBJ4WwCm53FDHBquLSQA_TIPmTeayveA7U4_g="
            alt="Banner"
            className="w-full h-48 object-cover"
          />
          <div className="absolute -bottom-12 left-6">
            <img
              src={lawyer.photo ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : null}
              alt={`${lawyer.name}`}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Lawyer Details */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800 z-10">
              {lawyer.name}
            </h2>
            <span className="bg-blue-500 self-center text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
              <VerifiedIcon /> Verified Lawyer
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 italic">
            {lawyer.PeferDomain || "Specialization not provided"} Law
          </p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* First Column */}
            <div>
              <p className="flex items-center text-gray-700 text-sm mb-2">
                <LocationOnIcon className="mr-2 text-blue-500" />
                <span>{lawyer.practiceCity || "City not available"}</span>
              </p>
              <p className="flex items-center text-gray-700 text-sm mb-2">
                <WorkIcon className="mr-2 text-blue-500" />
                <span>{lawyer.practiceCourt || "Court details not available"}</span>
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <LocalPhoneIcon className="mr-2 text-blue-500" />
                <span>+91 {lawyer.mobileNo || "+91 XXXXXXXXXX"}</span>
              </p>
            </div>

            {/* Second Column */}
            <div>
              <p className="flex items-center text-gray-700 text-sm mb-2">
                <EmailIcon className="mr-2 text-blue-500" />
                <span>{lawyer.email || "example@example.com"}</span>
              </p>
              <p className="flex items-center text-gray-700 text-sm mb-2">
                <CalendarTodayIcon className="mr-2 text-blue-500" />
                <span>
                  Experience: {lawyer.experience || "5+ Years"}
                </span>
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <EventAvailableIcon className="mr-2 text-blue-500" />
                <span>
                  Available: {lawyer.available || "In 7 days"}
                </span>
              </p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Lawyer Bio Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              About {lawyer.name.split(" ")[0]}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {lawyer.bio ||
                "Experienced lawyer with vast knowledge in legal matters, committed to serving justice and helping clients with utmost dedication."}
            </p>
          </div>

          {/* Book Appointment Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold transform transition duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => alert("Appointment Booked!")}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}