"use client";

const steps = [
  { id: 1, title: "Request", icon: "📄" },
  { id: 2, title: "Cost calculation", icon: "🧾" },
  { id: 3, title: "Payment", icon: "💳" },
  { id: 4, title: "Layout Check", icon: "👁️" },
  { id: 5, title: "Prepress", icon: "💧" },
  { id: 6, title: "Approval", icon: "✅" },
  { id: 7, title: "Print", icon: "🖨️" },
  { id: 8, title: "Post-print processing", icon: "🗂️" },
  { id: 9, title: "Quality control", icon: "💎" },
  { id: 10, title: "Delivery/pickup", icon: "📦" },
];

export default function StepsPrinting() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#470065] mb-10 text-center uppercase tracking-wide">
          Steps Printing
        </h2>

        {/* Wrapper: grid with 2 parts — left (10 boxes), right (video card) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
          {/* Left side boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center bg-white rounded-xl border border-[#8A00C3]/20 shadow-sm hover:shadow-lg transition-all p-6 text-center hover:scale-105"
              >
                {/* Step number */}
                <div className="absolute top-3 left-3 bg-[#8A00C3]/10 text-[#8A00C3] w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-[#8A00C3] text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <p className="font-semibold text-[#470065] text-sm leading-tight">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right side video card */}
          <div className="flex items-center justify-center bg-white rounded-xl border border-[#8A00C3]/20 shadow-md p-8 h-full">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#8A00C3]/10 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8 text-[#8A00C3]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-1">Watch the video</p>
              <h3 className="text-[#470065] font-semibold text-lg mb-4">
                How do we work?
              </h3>

              <img
                src="https://cdn.pixabay.com/photo/2017/01/31/17/44/business-2029310_960_720.png"
                alt="People working illustration"
                className="w-44 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
