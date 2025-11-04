"use client";

const steps = [
  {
    title: "Research",
    description:
      "On understanding, in brief, We study client brand guidelines. We try to understand the client’s requirements better and give suggestions on that if required.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#8A00C3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Packaging Story",
    description:
      "Our designers will process your request based on your guidelines and adjust colour codes (Pantone, CMYK) accordingly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#8A00C3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7l6-4 6 4m-6 0v11"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6v11H9z" />
      </svg>
    ),
  },
  {
    title: "Revisions & Approval",
    description:
      "A digital/physical sample will be provided for feedback, and further amendments if any, and revise as required until we get the final approval.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#8A00C3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5h2m-1 0v14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 15l7-7 3 3 5-5"
        />
      </svg>
    ),
  },
  {
    title: "Production & Then Final Delivery",
    description:
      "Once we get your approval we proceed with production. On approval, we package and deliver the final product to your doorstep.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#8A00C3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h1l1 2h12l1-2h1"
        />
        <circle cx="7" cy="20" r="2" />
        <circle cx="17" cy="20" r="2" />
      </svg>
    ),
  },
];

export default function EasySteps() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-center text-2xl font-bold mb-12 uppercase text-[#470065] tracking-wide">
        HOW WE WORK IN 4 EASY STEPS
      </h2>

      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#8A00C3]/40" />

        <div className="space-y-14">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex items-center">
                {/* Step Number Circle */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8A00C3] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg z-10">
                  Step {idx + 1}
                </div>

                {/* Content Box */}
                <div
                  className={`bg-white border border-[#470065]/20 rounded-lg p-6 w-96 shadow-md hover:shadow-xl transition-all duration-300 ${
                    isEven ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3 text-[#8A00C3]">
                    {step.icon}
                    <h3 className="font-semibold text-[#470065] text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Horizontal Connector */}
                <div
                  className={`absolute top-1/2 w-8 h-[2px] bg-[#8A00C3]/50 ${
                    isEven ? "right-0" : "left-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
