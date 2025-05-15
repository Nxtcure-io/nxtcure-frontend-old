import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <span className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Heading */}
        <h2
          className="cormorant text-2xl md:text-3xl lg:text-4xl font-bold italic text-center md:text-left md:w-2/5 "
          style={{ paddingLeft: "2rem", marginRight: "-3rem" }}
        >
          <span
            className="cormorant font-bold italic"
            style={{ fontSize: "2.8rem" }}
          >
            Finding the right <br /> Clinical Trial
          </span>{" "}
          <br />
          <div
            className="cormorant font-light italic text-gray-600"
            style={{ fontSize: "1.5rem" }}
          >
            feels like a never-ending game…..
          </div>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:w-3/5">
          <div
            className="stat-box bg-white rounded-lg p-6 shadow-sm"
            style={{
              marginRight: "0.5rem",
              border: "1px solid #8F8BFC",
              boxShadow: "1px 2.5px 5px rgb(181 180 223)",
            }}
          >
            <h3
              className="stats-font text-4xl mb-6"
              style={{ color: "#8F8BFC" }}
            >
              5%
            </h3>
            <p className="mt-3 text-gray-700 text-sm">
              Patients start their cancer’s first right clinical trial. 60% of
              eligible patients miss out on clinical trials.
            </p>
          </div>

          <div
            className="stat-box bg-white rounded-lg p-6 shadow-sm"
            style={{
              marginRight: "0.5rem",
              border: "1px solid #8F8BFC",
              boxShadow: "1px 2.5px 5px rgb(181 180 223)",
            }}
          >
            <h3
              className="stats-font text-4xl mb-6"
              style={{ color: "#8F8BFC" }}
            >
              80%
            </h3>
            <p className="mt-3 text-gray-700 text-sm">
              80% of clinical trials fail to meet enrollment goals.
            </p>
          </div>

          <div
            className="stat-box bg-white rounded-lg p-6 shadow-sm"
            style={{
              marginRight: "0.5rem",
              border: "1px solid #8F8BFC",
              boxShadow: "1px 2.5px 5px rgb(181 180 223)",
            }}
          >
            <h3
              className="stats-font text-4xl mb-6"
              style={{ color: "#8F8BFC" }}
            >
              94%
            </h3>
            <p className="mt-3 text-gray-700 text-sm">
              94% of physicians don’t even discuss clinical trials during
              regular visits.
            </p>
          </div>
        </div>
      </span>
    </section>
  );
};

export default FeaturesSection;
