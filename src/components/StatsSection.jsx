import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#F9F7FD] text-center">
      <h2 className="text-3xl md:text-4xl font-light italic mb-10 px-4">
        Finding the right <span className="font-medium">Clinical Trial</span>{" "}
        <br />
        feels like a never-ending game…
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-4xl font-bold text-indigo-600">5%</h3>
          <p className="mt-3 text-gray-700 text-sm">
            Patients start their cancer’s first right clinical trial. 60% of
            eligible patients miss out on clinical trials.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-4xl font-bold text-indigo-600">80%</h3>
          <p className="mt-3 text-gray-700 text-sm">
            80% of clinical trials fail to meet enrollment goals.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-4xl font-bold text-indigo-600">94%</h3>
          <p className="mt-3 text-gray-700 text-sm">
            94% of physicians don’t even discuss clinical trials during regular
            visits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
