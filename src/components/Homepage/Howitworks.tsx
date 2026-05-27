"use client"
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your account",
      description: "Sign up for free in a few clicks with your university email"
    },
    {
      number: "02",
      title: "Set up your courses",
      description: "Create your courses, add modules, and upload your teaching resources"
    },
    {
      number: "03",
      title: "Invite your students",
      description: "Share access codes or send email invitations to your students"
    },
    {
      number: "04",
      title: "Teach and monitor",
      description: "Deliver your courses online and track each student's progress"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">
            How <span className="text-pink-500">it works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900 p-8 rounded-xl border border-pink-500/30 h-full">
                <div className="text-6xl text-pink-500/20 mb-4">{step.number}</div>
                <h3 className="text-2xl mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
