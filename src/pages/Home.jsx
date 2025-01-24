import React from "react";
import Layout from "../components/Layout";
import TypingEffect from "react-typing-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const companies_logo = [
    { img: "./companies_logo/google.png" },
    { img: "./companies_logo/microsoft.png" },
    { img: "./companies_logo/amazon.png" },
    { img: "./companies_logo/apple.png" },
    { img: "./companies_logo/samsung.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    { title: "Technology", jobs: 120, icon: "💻" },
    { title: "Marketing", jobs: 80, icon: "📈" },
    { title: "Design", jobs: 50, icon: "🎨" },
    { title: "Healthcare", jobs: 60, icon: "⚕️" },
    { title: "Finance", jobs: 70, icon: "💰" },
    { title: "Education", jobs: 40, icon: "📚" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="bg-blue-900 rounded-xl shadow-lg p-10 sm:p-16 lg:p-24 text-center flex flex-col items-center">
          <TypingEffect
            className="text-white text-2xl sm:text-4xl font-bold"
            text={[
              "เรามีฟรีแลนซ์มืออาชีพหลากหลายสาขา",
              "พร้อมเปลี่ยนทุกไอเดียของคุณให้เป็นความจริง",
            ]}
            speed={50}
            eraseSpeed={30}
            typingDelay={500}
            eraseDelay={2000}
          />
          <div className="flex flex-col sm:flex-row justify-center mt-8 w-full gap-4">
            <input
              type="text"
              placeholder="ค้นหาฟรีแลนซ์...."
              className="p-3 w-full sm:max-w-lg block border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <button
              type="button"
              className="p-3 px-6 bg-blue-700 text-white rounded-lg shadow-sm hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Hot Work Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 py-10">
          <h1 className="font-bold text-lg text-blue-900">Hot work</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">งานที่มาแรง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 text-2xl">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">{category.jobs}+ งาน</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="container mx-auto px-4 py-10">
        <h1 className="font-bold text-lg text-blue-900">Trusted by</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          ได้รับความไว้วางใจจาก
        </h2>
        <Slider {...settings} className="w-full max-w-5xl mx-auto">
          {companies_logo.map((c, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={c.img}
                alt={`Company ${index}`}
                className="h-28 object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h1 className="text-blue-900 font-bold">Recommended Jobs</h1>
        <h1 className="text-3xl font-bold  mb-6">งานแนะนำสำหรับคุณ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Developer",
              company: "Google",
              location: "กรุงเทพฯ",
              salary: "50,000 - 70,000 บาท",
              logo: "./companies_logo/google.png",
            },
            {
              title: "UX/UI Designer",
              company: "Microsoft",
              location: "เชียงใหม่",
              salary: "40,000 - 60,000 บาท",
              logo: "./companies_logo/microsoft.png",
            },
            {
              title: "Digital Marketing Specialist",
              company: "Amazon",
              location: "ภูเก็ต",
              salary: "45,000 - 65,000 บาท",
              logo: "./companies_logo/amazon.png",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 object-contain rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">บริษัท {job.company}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
              </div>
              <button
                className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:ring focus:ring-blue-300 focus:outline-none transition-all"
              >
                สมัครงาน
              </button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
