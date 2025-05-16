import ishitaPic from "../assets/ishita.jpg";
import alessandroPic from "../assets/alessandro.jpg";

export default function MeetTheTeamSection() {
  return (
    <section className="py-20 bg-white text-center pl-4 pr-3">
      <h2 className="cormorant text-5xl font-bold mb-4 text-gray-700">
        Meet the Team
      </h2>
      <p className="text-gray-500 mb-12">
        Together, they're building a future where no one is left behind in the
        search for healing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Alessandro */}
        <div
          className="flex flex-col justify-between bg-white p-6 rounded-lg border border-gray-400 max-w-md w-full h-full"
          style={{ boxShadow: "1px 2px 5px gray" }}
        >
          <div>
            <div className="flex items-center mb-4">
              <img
                src={alessandroPic}
                alt="Alessandro"
                className="w-20 h-20 rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold">Alessandro Hammond</h4>
                <p className="text-sm text-gray-400">Co-Founder</p>
              </div>
            </div>
            <p className="text-justify text-gray-600 text-sm">
              Alessandro Hammond is a Harvard graduate and Schwarzman Scholar
              currently conducting clinical research at Boston Children’s
              Hospital, the Broad Institute, and Massachusetts General Hospital.
              Specializing in oncology and hematology, he has authored 20+
              publications in leading journals including Nature, Nature
              Medicine, and JCO. Featured in Forbes and Good Morning America, he
              is passionate about connecting patients with clinical trials and
              guiding researchers through them.
            </p>
          </div>
          <div className="mt-4 text-left">
            <a
              href="https://linkedin.com/in/alessandrohammond"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alessandro LinkedIn"
              className="inline-block"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 hover:text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Ishita */}
        <div
          className="flex flex-col justify-between bg-white p-6 rounded-lg border border-gray-400 max-w-md w-full h-full"
          style={{ boxShadow: "1px 2px 5px gray" }}
        >
          <div>
            <div className="flex items-center mb-4">
              <img
                src={ishitaPic}
                alt="Ishita"
                className="w-21 h-20 rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold">Ishita Kapoor</h4>
                <p className="text-sm text-gray-400">Co-Founder</p>
              </div>
            </div>
            <p className="text-justify text-gray-600 text-sm">
              Ishita Kapoor is a technologist, 2x co-founding impact-driven
              ventures that merge tech innovation with strategic business
              insight. A Schwarzman Scholar, startup board member at IIT
              Roorkee, she has earned accolades from Microsoft, Google, and
              UNICEF, with 30+ national and international hackathon wins. Ishita
              has presented her work to Microsoft CEO Satya Nadella and now
              closely works with Microsoft as one of their PR partners. She was
              also awarded India’s Best Research Paper of the Year in 2023,
              recognized through Scopus-indexed journals.
            </p>
          </div>
          <div className="mt-4 text-left">
            <a
              href="https://linkedin.com/in/ishitakapoor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ishita LinkedIn"
              className="inline-block"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 hover:text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
