import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="font-extrabold text-gray-800 mb-6"
            style={{ fontSize: "36px" }}
          >
            Finding the right Clinical Trial feels like a never-ending game....
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-6">
              <div
                className="absolute inset-0 flex items-center justify-center text-xl font-bold text-purple-600"
                style={{ fontSize: "30px" }}
              >
                5%
              </div>
              <svg className="w-full h-full">
                <circle
                  className="text-gray-200"
                  strokeWidth="18"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-purple-500"
                  strokeWidth="12"
                  strokeDasharray="314"
                  strokeDashoffset="298" // Small amount filled (5%)
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                  transform="rotate(-90 64 64)"
                />
              </svg>
            </div>
            <p
              className="text-sm text-gray-500 max-w-xs"
              style={{ fontSize: "20px" }}
            >
              Patients can't find or access the right clinical trials. Only 5%
              of eligible patients ever enroll in clinical trials.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-6">
              <div
                className="absolute inset-0 flex items-center justify-center text-xl font-bold text-purple-600"
                style={{ fontSize: "30px" }}
              >
                80%
              </div>
              <svg className="w-full h-full">
                <circle
                  className="text-gray-200"
                  strokeWidth="18"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-purple-500"
                  strokeWidth="12"
                  strokeDasharray="314"
                  strokeDashoffset="62" // 80% filled
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                  transform="rotate(-90 64 64)"
                />
              </svg>
            </div>
            <p
              className="text-sm text-gray-500 max-w-xs"
              style={{ fontSize: "20px" }}
            >
              80% of clinical trials fail to meet enrollment timelines.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-6">
              <div
                className="absolute inset-0 flex items-center justify-center text-xl font-bold text-purple-600"
                style={{ fontSize: "30px" }}
              >
                94%
              </div>
              <svg className="w-full h-full">
                <circle
                  className="text-gray-200"
                  strokeWidth="18"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-purple-500"
                  strokeWidth="12"
                  strokeDasharray="314"
                  strokeDashoffset="19" // 94% filled
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="55"
                  cx="64"
                  cy="64"
                  transform="rotate(-90 64 64)"
                />
              </svg>
            </div>
            <p
              className="text-sm text-gray-500 max-w-xs"
              style={{ fontSize: "20px" }}
            >
              94% of physicians say they don't have time to identify
              trial-eligible patients during regular visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
