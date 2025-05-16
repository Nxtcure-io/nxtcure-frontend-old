import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Heading */}
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="cormorant font-bold italic text-4xl lg:text-5xl mb-2">
            Finding the right <br /> Clinical Trial
          </h2>
          <p className="cormorant font-light italic text-gray-600 text-xl">
            feels like a never-ending game…..
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-3/5">
          {[
            {
              stat: "5%",
              text: "Patients start their cancer’s first right clinical trial. 60% of eligible patients miss out on clinical trials.Most patients (73%) want to join clinical trials but don’t know how to find or enroll in them.",
            },
            {
              stat: "80%",
              text: "Less than 5% of eligible U.S. patients— like those with cancer or heart failure— enroll in clinical trials, as over 80% of trials face recruitment issues due to overly strict eligibility criteria.",
            },
            {
              stat: "94%",
              text: "94% of physicians don’t discuss clinical trials during routine visits. Without proper tools to stay informed or design new trials, doctors and researchers unintentionally exclude >65% of eligible patients.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full bg-white border border-[#8F8BFC] rounded-lg p-6 shadow-md"
              style={{
                boxShadow: "1px 2.5px 5px rgb(181 180 223)",
              }}
            >
              <h3
                className="stats-font mb-4"
                style={{
                  color: "#8F8BFC",
                  fontSize: "4rem",
                  lineHeight: 1.1,
                }}
              >
                {item.stat}
              </h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
