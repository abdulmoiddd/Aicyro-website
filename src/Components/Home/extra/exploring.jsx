import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../../lib/firebase";
// ---------------------------------

// NOTE: Static image imports have been removed in favor of dynamic Firebase URLs.

// --- Icon Definitions ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
const CrownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-[#9a7ffc]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 16s-2 1-2 4h18c0-3-2-4-2-4M12 14V2l3 3m-6 0l3-3"
    />
  </svg>
);
const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
    />
  </svg>
);

const Explore = () => {
  const [exploreData, setExploreData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    // Define the reference to the "Explore" section data
    const exploreRef = ref(database, "exploreSection");

    // Set up the listener
    const unsubscribe = onValue(
      exploreRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setExploreData(snapshot.val());
          setLoading(false);
        } else {
          console.log(
            "No Explore section data found at 'exploreSection' path."
          );
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // 3. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
        Loading Exploration Data...
      </section>
    );
  }

  if (!exploreData) {
    return (
      <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
        Error loading data or no sections configured.
      </section>
    );
  }

  // Destructure data for cleaner use in JSX
  const {
    header,
    communicationBlock,
    bookingBlock,
    supportBlock,
    ratingsBlock,
    scalableBlock,
  } = exploreData;

  // Helper function to render star ratings dynamically
  const renderStars = (count) => {
    // Ensure the count is an integer between 1 and 5 (for safety)
    const activeStars = Math.max(0, Math.min(5, Math.round(parseFloat(count))));
    return (
      <div className="text-[#7B71DB] mb-4 flex space-x-0.5">
        {[...Array(activeStars)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
    );
  };

  // 4. RENDER THE COMPONENT WITH DYNAMIC DATA
  return (
    <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section (Dynamic) */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {header.title}
          </h1>
        </div>
        <div className="text-left pt-2 lg:pt-0">
          <p className="text-base sm:text-lg text-gray-400">
            {header.subtitle}
          </p>
        </div>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* === Block 1: Clear & Prompt Communication (Dynamic) === */}
        <div className="bg-[#1B0B35] p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="text-left md:w-3/5">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {communicationBlock.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              {communicationBlock.description}
            </p>
            <button
              onClick={() =>
                window.open(communicationBlock.button.link, "_blank")
              }
              className="bg-gradient-to-r from-[#7873DA] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7873DA] text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm w-full md:w-auto"
            >
              {communicationBlock.button.text}
            </button>
          </div>

          {/* Product Screenshot Image (Dynamic Source/Alt) */}
          <div className="w-full md:w-auto flex justify-center items-center flex-shrink-0">
            <div className="p-2 rounded-xl w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center relative">
              {/* Added width/height for external URL compatibility */}
              <Image
                src={communicationBlock.imageUrl || "/fallback-placeholder.png"}
                alt={
                  communicationBlock.imageAlt || "Digital product screenshot"
                }
                width={200}
                height={200}
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* === Block 2 & 3 Container (Nested Grid) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inner Block 2: Book a Call (Dynamic) */}
          <div className="border border-gray-500/50 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col items-start justify-between">
            <h2 className="text-xl font-semibold mb-4">{bookingBlock.title}</h2>
            {/* Team Collaboration Image (Dynamic Source/Alt) */}
            <div className="w-full mt-2">
              <div className="w-full h-32 sm:h-40 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Added width/height for external URL compatibility */}
                <Image
                  src={bookingBlock.imageUrl || "/fallback-placeholder.png"}
                  alt={bookingBlock.imageAlt || "Team members collaborating"}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Inner Block 3: Premium Support (Dynamic) */}
          <div className="border border-gray-500/50 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center">
            <div className="bg-gradient-to-r from-[#7873DA] to-[#5B86D3] p-4 rounded-full mb-4 flex-shrink-0">
              <PhoneIcon />
            </div>
            <h2 className="text-xl font-bold mb-1">{supportBlock.title}</h2>
            <p className="text-white text-3xl font-light mb-2">
              {supportBlock.phoneNumber}
            </p>
            {renderStars(supportBlock.starRating)} {/* Dynamic Star Rating */}
            <p className="text-gray-300 mb-6 text-sm">
              {supportBlock.description}
            </p>
            <button
              onClick={() => (window.location.href = supportBlock.button.link)}
              className="border border-[#5B86D3] text-white hover:bg-[#7B71DB] hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center space-x-2 text-sm w-full justify-center"
            >
              <ChatIcon />
              <span>{supportBlock.button.text}</span>
            </button>
          </div>
        </div>

        {/* === Block 4: Client Ratings (Dynamic) === */}
        <div className="border border-gray-500/50 p-8 rounded-xl shadow-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-1">
            {ratingsBlock.rating}
          </h2>
          <p className="text-xl sm:text-3xl font-semibold mb-4">
            {ratingsBlock.title}
          </p>
          {renderStars(ratingsBlock.starRating)} {/* Dynamic Star Rating */}
          <p className="text-sm sm:text-base text-gray-400">
            {ratingsBlock.description}
          </p>
        </div>

        {/* === Block 5: Scalable Solutions (Dynamic) === */}
        <div className="border border-gray-500/50 p-8 rounded-xl shadow-2xl">
          <div className="flex items-center mb-4">
            <span className="mr-3 flex-shrink-0">
              <CrownIcon />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              {scalableBlock.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-6">
            {scalableBlock.description}
          </p>
          <Link
            href={scalableBlock.button.link}
            className="inline-block text-center bg-gradient-to-r from-[#7873DA] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7873DA] text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm w-full sm:w-auto"
          >
            {scalableBlock.button.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
