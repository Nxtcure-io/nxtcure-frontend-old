import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start pt-4">
      {/* This outer div centers and pads from all sides */}

      <div
        className="w-full max-w-[1440px] bg-white rounded-md shadow-md overflow-auto"
        style={{
          height: "95vh",
          border: "1.5px solid gray-500",
          boxShadow: "1px 4px 8px #908DDC",
        }}
      >
        {/* Inner container: fixed max-width, white bg, and scrollable with height limit */}

        <Navbar />
        <main className="">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
