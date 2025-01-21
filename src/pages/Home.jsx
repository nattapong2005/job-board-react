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
    dots: true, // แสดงจุดด้านล่าง
    infinite: true, // เลื่อนได้เรื่อยๆ ไม่มีจุดสิ้นสุด
    speed: 500, // ความเร็วของการเปลี่ยนภาพ (มิลลิวินาที)
    slidesToShow: 3, // จำนวนภาพที่แสดงต่อหน้า
    slidesToScroll: 1, // จำนวนภาพที่เลื่อนต่อครั้ง
    responsive: [
      {
        breakpoint: 1024, // สำหรับหน้าจอขนาด <= 1024px (แท็บเล็ต)
        settings: {
          slidesToShow: 2, // แสดง 2 ภาพ
        },
      },
      {
        breakpoint: 600, // สำหรับหน้าจอขนาด <= 600px (มือถือ)
        settings: {
          slidesToShow: 1, // แสดง 1 ภาพ
        },
      },
    ],
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <div className="bg-blue-900 rounded-xl shadow-lg p-32 flex flex-col items-center">
          <TypingEffect
            className="text-white text-4xl font-bold text-center"
            text={[
              "เรามีฟรีแลนซ์มืออาชีพหลากหลายสาขา",
              "พร้อมเปลี่ยนทุกไอเดียของคุณให้เป็นความจริง",
            ]}
            speed={50} // ความเร็วของการพิมพ์
            eraseSpeed={30} // ความเร็วของการลบ
            typingDelay={500} // เวลาเริ่มการพิมพ์
            eraseDelay={2000} // เวลาพักก่อนลบ
          />
          <div className="flex justify-center mt-6 w-full gap-2">
            <input
              type="text"
              placeholder="ค้นหาฟรีแลนซ์...."
              className="p-2 w-full max-w-xl block border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <button
              type="button"
              className="p-2 px-6 bg-blue-700 text-white rounded-lg shadow-sm hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="mt-10 mb-5 text-center">
          <h1 className="font-bold text-lg">Trusted by</h1>
          <h1 className="text-3xl font-bold">ได้รับความไว้วางใจจาก</h1>
        </div>

        {/* Flexbox Container for Centering the Slider */}
        <div className="flex justify-center mt-10">
          <Slider {...settings} className="w-full max-w-5xl">
            {companies_logo.map((c, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={c.img}
                  alt={`Company ${index}`}
                  className="h-20 object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
