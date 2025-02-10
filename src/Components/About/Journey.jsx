import React from "react";

const Journey = () => {
  const journeyData = [
    {
      year: "2013",
      title: "Autovate IS FOUNDED",
      description: "The beginning of our mission to redefine autonomous vehicles."
    },
    {
      year: "2015",
      title: "GROUNDBREAKING SENSOR TECHNOLOGY LAUNCHED",
      description: "Our advanced sensors revolutionized vehicle perception."
    },
    {
      year: "2016",
      title: "SAN FRANCISCO HQ OPENS",
      description: "A new hub for innovation and collaboration in the tech capital."
    },
    {
      year: "2017",
      title: "FIRST PROTOTYPE IS TEST-DRIVEN",
      description: "A milestone where our vision came to life on the roads."
    },
    {
      year: "2018",
      title: "PARTNERSHIP WITH TRI-NEX & GENERAL TRANSPORT INITIATED",
      description: "Collaborating with industry leaders to push boundaries."
    },
    {
      year: "2019",
      title: "TESTING EXPANDS TO ARIZONA & NEW MEXICO",
      description: "Challenging diverse terrains to perfect our technology."
    },
    {
      year: "2020",
      title: "PRODUCTION BEGINS!",
      description: "Turning prototypes into reality with full-scale production."
    },
    {
      year: "2021",
      title: "FIRST 1,000 CARS SOLD",
      description: "A proud moment as customers embraced our innovation."
    },
    {
      year: "2022",
      title: "Autovate TECHNOLOGY RECEIVES INNOVATION AWARD",
      description: "Recognition for our commitment to groundbreaking advancements."
    },
    {
      year: "2023",
      title: "EXPANDED OPERATIONS TO EUROPE AND ASIA",
      description: "Bringing our technology to a global audience."
    },
    {
      year: "2024",
      title: "NEXT-GEN AUTONOMOUS VEHICLE PLATFORM LAUNCHED",
      description: "The future of transportation begins with our next-gen platform."
    },
  ];

  return (
    <div className="py-16">
      <div data-aos='fade-up' data-aos-delay='250' className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 xl:text-5xl xl:mb-16">
          Our Journey
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? "lg:mt-6" : "lg:mb-6"
                }`}
            >
              <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-black text-white text-sm font-bold py-1 px-4 rounded-full shadow-md">
                {item.year}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
