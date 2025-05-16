export default function ContactForm() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Have questions or suggestions? We’d love to hear from you.
          </p>
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Chat with us:</strong> support@nxtcure.com
            </p>
            <p>
              <strong>Call us:</strong> +91 9876543210
            </p>
          </div>
        </div>
        <form className="w-full md:w-1/2 bg-[radial-gradient(circle_at_center,_#F1E2FE_0%,_#F3ECFF_10%,_#EEF7FF_90%)] p-6 rounded-2xl shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 px-4 py-2 rounded-md border border-[#7D4AE7] bg-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 px-4 py-2 rounded-md border border-[#7D4AE7] bg-white focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded-md border border-[#7D4AE7] bg-white focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full px-4 py-2 rounded-md border border-[#7D4AE7] bg-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="button_hvr bg-[#7D4AE7] text-white px-6 py-2 rounded-full hover:bg-[#6a3dcc] transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
