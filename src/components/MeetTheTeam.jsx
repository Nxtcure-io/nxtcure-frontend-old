import ishitaPic from "../assets/ishita.jpg";
import alessandroPic from "../assets/alessandro.jpg";

export default function MeetTheTeamSection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-5xl font-bold mb-4 text-gray-700">Meet the Team</h2>
      <p className="text-gray-500 mb-12">
        Together, they're building a future where no one is left behind in the
        search for healing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Alessandro */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex flex-col items-center mb-4">
            <img
              src={alessandroPic}
              alt="Alessandro"
              className="w-30 h-30 rounded-full mb-2"
            />
            <h4 className="font-bold">Alessandro Hammond</h4>
            <p className="text-sm text-gray-400">Co-Founder</p>
          </div>
          <ul className="text-left text-gray-600 text-sm space-y-2">
            <li>• Co-creator of Cartography</li>
            <li>
              • 13+ year infosec career, building capabilities at Lyft,
              Microsoft, and NSA
            </li>
            <li>
              • Architected and built Lyft’s vulnerability management platform
            </li>
          </ul>
        </div>

        {/* Ishita */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex flex-col items-center mb-4">
            <img
              src={ishitaPic}
              alt="Ishita"
              className="w-30 h-30 rounded-full mb-2"
            />
            <h4 className="font-bold">Ishita Kapoor</h4>
            <p className="text-sm text-gray-400">Co-Founder</p>
          </div>
          <ul className="text-left text-gray-600 text-sm space-y-2">
            <li>
              • Former Lyft Staff Engineer and Member of Technical Staff at
              Anthropic
            </li>
            <li>
              • Architected Lyft’s insider abuse program, reducing security
              risks
            </li>
            <li>
              • Won Microsoft’s internal employee hackathon in high school
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
